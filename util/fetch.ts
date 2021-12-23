/*
 * @Author: your name
 * @Date: 2021-12-14 14:39:12
 * @LastEditTime: 2021-12-23 21:20:39
 * @LastEditors: ran
 */
import { toast } from "./toast";

interface qs {
  [propname: string | symbol]: string;
}
interface download {
  body?: string;
  query: qs;
  filename: string;
  ContentType: string;
  methods: string;
  url: string;
}
interface headerType {
  methods: string;
  credentials: string;
  headers: Headers;
  body: string;
}
const downloadBlob = (blob: Blob, fileName: string) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.style.display = "none";
  document.body.appendChild(a);
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
const savingFile = (blob: Blob, fileName: string) => {
  const reader = new FileReader();
  reader.addEventListener("loadend", () => downloadBlob(blob, fileName));
  reader.readAsText(blob);
};
const resBlob = (
  reader: ReadableStreamDefaultReader<BufferSource>,
  data: BlobPart[],
  type: string | null
) =>
  new Promise((resolve) => {
    function push() {
      reader.read().then(({ done, value }) => {
        value && data.push(value);
        done && type ? resolve(new Blob(data, { type })) : push();
      });
    }
    push();
  });
const readStream = (reader: ReadableStreamDefaultReader<Uint8Array>) =>
  new ReadableStream({
    start(controller) {
      return push();
      function push(): Promise<ReadableStreamDefaultReadResult<Uint8Array>> {
        return reader.read().then((res) => {
          const { done, value } = res;
          if (done) {
            controller.close();
          }
          controller.enqueue(value);
          return push();
        });
      }
    },
  });
const qs = (params: qs) => {
  let qstring = "";
  Object.keys(params).forEach((item, index) => {
    if (index === 0) {
      qstring += `?${item}=${params[item]}`;
    } else {
      qstring += `&${item}=${params[item]}`;
    }
  });
  return qstring;
};
// 下载
/**
 * @description: fetch下载的函数
 * @param {Object} body 请求体
 * @param {Object} query 请求querystring
 * @param {String} filename 下载的文件名，不传就从请求头的content-disposition中获取
 * @param {String} ContentType 请求头的ContentType，默认application/x-www-form-urlencoded
 * @param {String} methods 请求方法，默认GET
 * @param {String} url 请求地址
 * @return {*} Promise
 */
export const download = ({
  body,
  query,
  filename,
  ContentType = "application/x-www-form-urlencoded",
  methods = "GET",
  url,
}: download) => {
  if (!url) return;
  const option = {
    methods,
    // credentials: 'include',
    headers: {
      "Content-Type": ContentType,
    },
    body: JSON.stringify(body),
  };
  let requestUrl = url;
  if (query) {
    requestUrl += `${qs(query)}`;
  }
  return fetch(`${requestUrl}`, option)
    .then((res: Response) => {
      if (!filename) {
        const str = res.headers.get("content-disposition") ?? "";
        filename = decodeURIComponent(str.replace("attachment;filename=", ""));
      }
      if (res.body) return new Response(readStream(res.body.getReader()));
      return res;
    })
    .then((res) => {
      if (res?.body)
        return resBlob(
          res.body.getReader(),
          [],
          res.headers.get("Content-Type")
        );
      return new Promise((resolve) => resolve(new Blob()));
    })
    .then((res) => savingFile(res as Blob, filename))
    .catch((error: { message: any }) => toast(`${error.message}请再次尝试`));
};
