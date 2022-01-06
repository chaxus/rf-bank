interface qs {
    [propname: string | symbol]: string;
}
interface download {
    body?: string;
    payload?: qs;
    filename: string;
    ContentType: string;
    methods: string;
    url: string;
}
declare const qs: (params: qs) => string;
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
export declare const fetchFile: ({ payload, filename, methods, url }: download) => Promise<void>;
export {};
