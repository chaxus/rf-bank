import { Draw } from './util/draw';
import { fetchFile } from './util/fetch';
import { toast } from './util/toast';
interface obj {
    [propname: string | symbol]: string;
}
/**
 * @description: 判断设备
 */
export declare const judgeDevice: string | undefined;
/**
 * @description:  判断是否是微信环境
 */
export declare function isWeiXin(): boolean | undefined;
/**
 * @description: 改变网站在导航栏的图标
 */
export declare const changeFavicon: (link: string) => void;
/**
 * @description: 获取地址栏的参数
 */
export declare const getAllQueryString: (url: string) => obj | undefined;
/**
 * @description: 数字转化为中文数字
 */
export declare const converToChinaNum: (num: number) => string;
/**
 * @description: 清除空格和换行
 */
export declare const clearBr: (str?: string) => string;
/**
 * 动态插入script/link标签
 * @param {Array | String} url script/link的url队列
 * @param {Element} appendee 插入的父元素 默认body
 * @param {Function} callback 所有script onload回调 也可通过返回的promise执行回调
 */
export declare const scriptOnLoad: (urls: Array<string>, appendee: HTMLElement, callback: Function) => Promise<unknown> | undefined;
/**
 * @description: 是否是移动端
 */
export declare const isMobile: () => boolean | undefined;
/**
 * @description: 跨浏览器获取可视窗口大小
 */
export declare const getWindow: () => {
    width: number;
    height: number;
} | undefined;
/**
 * @description: 禁止用户缩放
 */
export declare const prohibit: () => void;
/**
 * @description: 添加tdk
 */
export declare const tdk: (name: string, content: string) => void;
/**
 * @description: 获取指定的cookie
 */
export declare const getCookie: (objName: string) => string | undefined;
/**
 * @description: 打印中间产生的值
 */
export declare const log: (v: any) => any;
/**
 * @description: 异步打印中间产生的值
 */
export declare const asyLog: (v: any) => Promise<unknown>;
/**
 * @description: 函数的组合
 * @param {array} args
 */
export declare const compose: (...args: any[]) => (value: any) => any;
/**
 * @description: 函数的柯里化
 * @param {*} func
 */
export declare function curry(func: Function): (...args: any[]) => any;
/**
 * @description: 函数的缓存
 * @param {*} fn
 */
export declare function memoize(fn: Function): () => string;
/**
 * @description: 传入对象，返回对象请求序列化的字符串
 * @param {Object}
 * @return {string}
 */
export declare const querystring: (param: Record<string, unknown>) => string;
export { Draw, fetchFile, toast };
