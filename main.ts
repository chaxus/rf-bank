import { Draw } from './util/draw';
import { fetchFile } from './util/fetch'
import { toast } from './util/toast';
import { isClient } from './util/index'



interface memoize {
  [propname:string|symbol]:string
}
interface obj {
  [propname:string|symbol]:string
}
/**
 * @description: 判断设备
 */
export const judgeDevice = (function () {
  if(!isClient) return 
  const ua = window.navigator.userAgent.toLowerCase();
  if (/ipad|ipod/.test(ua)) {
    return 'ipad';
  } else if (/android|iphone/.test(ua)) {
    return 'mobile';
  }
  return 'pc';
})();

/**
 * @description:  判断是否是微信环境
 */
export function isWeiXin() {
  if(!isClient) return 
  const ua = window.navigator.userAgent.toLowerCase();
  const flag = /micromessenger/.test(ua) && !/wxwork/.test(ua);
  return flag;
}
/**
 * @description: 改变网站在导航栏的图标
 */
export const changeFavicon = (link:string) => {
  if(!isClient) return 
  let $favicon:HTMLLinkElement|null = document.querySelector('link[rel="icon"]');
  if ($favicon !== null) {
    $favicon.href = link;
  } else {
    $favicon = document.createElement('link');
    $favicon.rel = 'icon';
    $favicon.href = link;
    document.head.appendChild($favicon);
  }
};
/**
 * @description: 获取地址栏的参数
 */
export const getAllQueryString = (url:string) => {
  if(!isClient) return 
  const r:obj = {};
  const _url = url || window.location.href;
  if (_url.split('?')[1]) {
    let str = _url.split('?')[1];
    let arr = str.split('&');
    arr.forEach((item) => {
      const key = item.split('=')[0];
      const val = item.split('=')[1];
      if (key && val) {
        r[key] = decodeURIComponent(val);
      }
    });
  }
  return r;
};
/**
 * @description: 数字转化为中文数字
 */
export const converToChinaNum = (num:number) => {
  const arr1 = new Array(
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九'
  );
  const arr2 = new Array(
    '',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿'
  ); //可继续追加更高位转换值
  if (!num || isNaN(num)) {
    return '零';
  }
  const english =num.toString().split('');
  let result = '';
  for (let i = 0; i < english.length; i++) {
    const des_i = english.length - 1 - i; //倒序排列设值
    result = arr2[i] + result;
    const arr1_index = Number(english[des_i]);
    result = arr1[arr1_index] + result;
  }
  //将【零千、零百】换成【零】 【十零】换成【十】
  result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十');
  //合并中间多个零为一个零
  result = result.replace(/零+/g, '零');
  //将【零亿】换成【亿】【零万】换成【万】
  result = result.replace(/零亿/g, '亿').replace(/零万/g, '万');
  //将【亿万】换成【亿】
  result = result.replace(/亿万/g, '亿');
  //移除末尾的零
  result = result.replace(/零+$/, '');
  //将【零一十】换成【零十】
  //result = result.replace(/零一十/g, '零十');//貌似正规读法是零一十
  //将【一十】换成【十】
  result = result.replace(/^一十/g, '十');
  return result;
};

/**
 * @description: 清除空格和换行
 */
export const clearBr = (str = '') => {
  if (str.length === 0) return '';
  return str
    .replace(/\s+/g, '')
    .replace(/<\/?.+?>/g, '')
    .replace(/[\r\n]/g, '');
};
/**
 * 动态插入script/link标签
 * @param {Array | String} url script/link的url队列
 * @param {Element} appendee 插入的父元素 默认body
 * @param {Function} callback 所有script onload回调 也可通过返回的promise执行回调
 */
export const scriptOnLoad = (urls:Array<string>, appendee:HTMLElement, callback:Function) => {
  if(!isClient) return 
  urls = Array.isArray(urls) ? urls : [urls];
  const array = urls.map((src) => {
    const cssReg = /\w*.css$/;
    let script:HTMLScriptElement|HTMLLinkElement;
    if (cssReg.test(src)) {
      const link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = src;
      script = link;
    } else {
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
    }
    const bodyElement = document.getElementsByTagName('body')[0];
    const currentAppendee = appendee || bodyElement;
    currentAppendee.appendChild(script);
    return new Promise((resolve) => {
      script.onload = () => {
        resolve(script);
      };
    });
  });

  return new Promise((resolve) => {
    Promise.all(array).then(() => {
      if (typeof callback === 'function') {
        callback();
      }
      resolve(callback);
    });
  });
};
/**
 * @description: 是否是移动端
 */
export const isMobile = () => {
  if(!isClient) return 
  const ua = window.navigator.userAgent;
  if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(ua)) {
    return true;
  }
  return false;
};
/**
 * @description: 跨浏览器获取可视窗口大小
 */
export const getWindow = () => {
  if(!isClient) return 
  if (typeof window.innerWidth !== 'undefined') {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };
};
/**
 * @description: 禁止用户缩放
 */
export const prohibit = () => {
  if(!isClient) return 
  const meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content =
    'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
  document.getElementsByTagName('head')[0].appendChild(meta);
};
/**
 * @description: 添加tdk
 */
export const tdk = (name:string, content:string) => {
  if(!isClient) return 
  const meta = document.createElement('meta');
  meta.name = name;
  meta.content = content;
  document.getElementsByTagName('head')[0].appendChild(meta);
};
/**
 * @description: 获取指定的cookie
 */
export const getCookie = (objName:string) => {
  if(!isClient) return 
  const arrStr = document.cookie.split('; ');
  for (let i = 0; i < arrStr.length; i++) {
    const item = arrStr[i].split('=');
    if (item[0] == objName) {
      return unescape(item[1]);
    }
  }
  return '';
};
/**
 * @description: 打印中间产生的值
 */
export const log = (v:any) => {
  console.log(v);
  return v;
};
/**
 * @description: 异步打印中间产生的值
 */
export const asyLog = (v:any) => new Promise((resolve)=>{
  console.log(v);
  resolve(v)
})

/**
 * @description: 函数的组合
 * @param {array} args
 */
export const compose = (...args: any[]) => (value: any) => args.reverse().reduce((acc, fn) => fn(acc), value);
//如果是表达式赋值的话，不会变量提升

/**
 * @description: 函数的柯里化
 * @param {*} func
 */
export function curry(func:Function) {
  return function curriedFn(...args: any[]) {
    if (args.length < func.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)));
      };
    } else {
      return func(...args);
    }
  };
}

/**
 * @description: 函数的缓存
 * @param {*} fn
 */
export function memoize(fn:Function) {
  let cache:memoize = {};
  return function () {
    let key = JSON.stringify(arguments);
    cache[key] = cache[key] || fn.apply(fn, arguments);
    return cache[key];
  };
}
/**
 * @description: 传入对象，返回对象请求序列化的字符串
 * @param {Object} 
 * @return {string}
 */
export const querystring = (param:Record<string,unknown>) => {
  let str = '';
    Object.keys(param).forEach((item, index) => {
      if (param[item] !== undefined && param[item] !== null && param[item] !== '') {
        index === 0 ? str += `${item}=${param[item]}` : str += `&${item}=${param[item]}`;
      }
    });
  return str
} 

  
export { Draw, fetchFile, toast };
