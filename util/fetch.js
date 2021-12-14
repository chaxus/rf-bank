/*
 * @Author: your name
 * @Date: 2021-12-14 14:39:12
 * @LastEditTime: 2021-12-14 15:16:06
 * @LastEditors: Please set LastEditors
 */
import { toast } from './toast';

const downloadBlob = (blob, fileName) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
const savingFile = (blob, fileName) => {
  const reader = new FileReader();
  reader.addEventListener('loadend', () => downloadBlob(blob, fileName));
  reader.readAsText(blob);
};
const resBlob = (reader, data, type) =>
  new Promise((resolve) => {
    function push() {
      reader.read().then(({ done, value }) => {
        data.push(value);
        done ? resolve(new Blob(data, { type })) : push();
      });
    }
    push();
  });
const readStream = (reader) =>
  new ReadableStream({
    start(controller) {
      return push();
      function push() {
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
const qs = (params) => {
  let qstring = '';
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
  body = '',
  query = '',
  filename,
  ContentType = 'application/x-www-form-urlencoded',
  methods = 'GET',
  url,
}) => {
  if (!url) return;
  const option = {
    methods,
    credentials: 'include',
    headers: new Headers({
      'Content-Type': ContentType,
    }),
    body: JSON.stringify(body),
  };
  let requestUrl = url;
  if (query) {
    requestUrl += `${qs(query)}`;
  }
  return fetch(`${requestUrl}`, option)
    .then((res) => {
      if (!filename) {
        filename = decodeURIComponent(
          res.headers
            .get('content-disposition')
            .replace('attachment;filename=', '')
        );
      }
      return new Response(readStream(res.body.getReader()));
    })
    .then((res) =>
      resBlob(res.body.getReader(), [], res.headers.get('Content-Type'))
    )
    .then((response) => savingFile(response, filename))
    .catch((error) => toast(`${error.message}请再次尝试`));
};
