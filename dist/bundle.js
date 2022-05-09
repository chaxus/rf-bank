/*eslint-disable*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('qrcode')) :
  typeof define === 'function' && define.amd ? define(['exports', 'qrcode'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rfarcel = {}, global.QRCode));
})(this, (function (exports, QRCode) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var QRCode__default = /*#__PURE__*/_interopDefaultLegacy(QRCode);

  /*
   * @Author: ran
   * @Date: 2021-12-06 15:56:34
   * @LastEditors: ran
   * @LastEditTime: 2022-05-09 16:25:59
   */
  /**
   * @description: 绘制图片的基础方法
   */
  class Draw {
      constructor(width) {
          /**
           * @description: 写文字
           */
          this.write = (option) => {
              const { fontWeight, fontSize, textColor, text, x, y, fontFamily = "AlibabaPuHuiTiH", } = option;
              return new Promise((reslove) => {
                  // 可以通过!.断言解决
                  if (this.context) {
                      this.context.font = `${fontWeight} ${fontSize * this.base}px ${fontFamily}`;
                      this.context.fillStyle = textColor;
                      this.context.fillText(text, x * this.base, y * this.base);
                  }
                  reslove(this.context);
              });
          };
          /**
           * @description: canvas导入图片
           */
          this.loadImg = (imageData) => new Promise((resolve) => {
              const image = new Image();
              image.setAttribute("crossOrigin", "anonymous");
              image.src = imageData;
              image.onload = () => {
                  resolve(image);
              };
          });
          /**
           * @description: canvas绘制二维码并设置大小和位置
           */
          this.qrcode = (option) => {
              const { url, margin = 1.5 } = option;
              return QRCode__default["default"].toDataURL(url, { margin });
          };
          /**
           * @description: 图片加载到canvas中，并设置位置和大小
           */
          this.composeImg = (option) => {
              const { image, x, y, w, h } = option;
              return new Promise((reslove) => {
                  if (this.context) {
                      this.context.drawImage(image, x * this.base, y * this.base, w * this.base, h * this.base);
                  }
                  reslove(this.context);
              });
          };
          /**
           * @description: 初始化canvas背景
           */
          this.initBackdrop = (image) => {
              this.canvas.width = image.width;
              this.canvas.height = image.height;
              if (this.width) {
                  this.base = image.width / this.width;
              }
              return this.composeImg({
                  image,
                  x: 0,
                  y: 0,
                  w: image.width / this.base,
                  h: image.height / this.base,
              });
          };
          /**
           * @description: canavs转图片，导出最后的url
           */
          this.outImg = () => new Promise((resolve) => {
              const url = this.canvas.toDataURL("image/png");
              resolve(url);
          });
          /**
           * @description: 加载自定义字体
           */
          this.loadFont = (fontName, fontUrl) => new Promise((resolve) => {
              const fontface = new FontFace(fontName, fontUrl);
              document.fonts.add(fontface);
              fontface.load();
              fontface.loaded.then(() => resolve(fontface));
          });
          this.width = width;
          this.base = 1;
          this.canvas = document.createElement("canvas");
          this.context = this.canvas.getContext("2d");
      }
  }

  const isClient = process.browser;

  /*
   * @Author: your name
   * @Date: 2021-12-14 14:49:36
   * @LastEditTime: 2022-05-09 16:58:00
   * @LastEditors: ran
   */
  /**
   * @description: 移动端的toast
   * @param {*} msg
   * @param {*} duration
   */
  function toast(msg, duration = 2000) {
      if (!isClient)
          return;
      duration = Number.isNaN(duration) ? 3000 : duration;
      const dom = document.createElement('div');
      dom.innerHTML = msg;
      dom.style.cssText = `
      max-width:60%;
      min-width: 150px;
      padding:5px 10px;
      min-height: 20px;
      color: rgb(255, 255, 255);
      line-height: 150%;
      text-align: center;
      border-radius: 4px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999999;
      background: rgba(0, 0, 0,.7);
      font-size: 14px;
      word-break: break-all;`;
      document.body.appendChild(dom);
      setTimeout(function () {
          // dom.style.webkitTransition = `-webkit-transform ${d}s ease-in, opacity ${d}s ease-in`;
          dom.style.opacity = '0';
          setTimeout(() => document.body.removeChild(dom), 500);
      }, duration);
  }

  /*
   * @Author: your name
   * @Date: 2021-12-14 14:39:12
   * @LastEditTime: 2022-05-09 16:55:33
   * @LastEditors: ran
   */
  const downloadBlob = (blob, fileName) => {
      if (!isClient)
          return;
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
  const savingFile = (blob, fileName) => {
      const reader = new FileReader();
      reader.addEventListener("loadend", () => downloadBlob(blob, fileName));
      reader.readAsText(blob);
  };
  const resBlob = (reader, data, type) => new Promise((resolve) => {
      function push() {
          reader.read().then(({ done, value }) => {
              value && data.push(value);
              done ? resolve(new Blob(data, { type })) : push();
          });
      }
      push();
  });
  const readStream = (reader) => new ReadableStream({
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
      let qstring = "";
      Object.keys(params).forEach((item, index) => {
          if (index === 0) {
              qstring += `?${item}=${params[item]}`;
          }
          else {
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
  const fetchFile = ({ payload, filename, methods = "GET", url }) => {
      if (!isClient)
          return;
      const option = {
          // credentials: 'include',
          headers: new Headers({
              'Content-Type': 'application/x-www-form-urlencoded',
          }),
          methods,
      };
      let requesetUrl = url;
      if (payload) {
          requesetUrl = `${url}${qs(payload)}`;
      }
      return fetch(requesetUrl, option)
          .then((res) => {
          var _a, _b;
          // 设置文件名，从响应头中获取
          filename = filename !== null && filename !== void 0 ? filename : decodeURIComponent((_b = (_a = res.headers.get('content-disposition')) === null || _a === void 0 ? void 0 : _a.replace('attachment;filename=', '')) !== null && _b !== void 0 ? _b : '收获地址.xlsx');
          return res.body && new Response(readStream(res.body.getReader()));
      })
          .then(res => {
          var _a;
          if (res === null || res === void 0 ? void 0 : res.body) {
              return resBlob(res.body.getReader(), [], (_a = res.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : undefined);
          }
      })
          .then(response => {
          return savingFile(response, filename);
      })
          .catch(error => toast(`${error.message}请再次尝试`));
  };

  /**
   * @description: 判断设备
   */
  const judgeDevice = (function () {
      if (!isClient)
          return;
      const ua = window.navigator.userAgent.toLowerCase();
      if (/ipad|ipod/.test(ua)) {
          return 'ipad';
      }
      else if (/android|iphone/.test(ua)) {
          return 'mobile';
      }
      return 'pc';
  })();
  /**
   * @description:  判断是否是微信环境
   */
  function isWeiXin() {
      if (!isClient)
          return;
      const ua = window.navigator.userAgent.toLowerCase();
      const flag = /micromessenger/.test(ua) && !/wxwork/.test(ua);
      return flag;
  }
  /**
   * @description: 改变网站在导航栏的图标
   */
  const changeFavicon = (link) => {
      if (!isClient)
          return;
      let $favicon = document.querySelector('link[rel="icon"]');
      if ($favicon !== null) {
          $favicon.href = link;
      }
      else {
          $favicon = document.createElement('link');
          $favicon.rel = 'icon';
          $favicon.href = link;
          document.head.appendChild($favicon);
      }
  };
  /**
   * @description: 获取地址栏的参数
   */
  const getAllQueryString = (url) => {
      if (!isClient)
          return;
      const r = {};
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
  const converToChinaNum = (num) => {
      const arr1 = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九');
      const arr2 = new Array('', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'); //可继续追加更高位转换值
      if (!num || isNaN(num)) {
          return '零';
      }
      const english = num.toString().split('');
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
  const clearBr = (str = '') => {
      if (str.length === 0)
          return '';
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
  const scriptOnLoad = (urls, appendee, callback) => {
      if (!isClient)
          return;
      urls = Array.isArray(urls) ? urls : [urls];
      const array = urls.map((src) => {
          const cssReg = /\w*.css$/;
          let script;
          if (cssReg.test(src)) {
              const link = document.createElement('link');
              link.type = 'text/css';
              link.rel = 'stylesheet';
              link.href = src;
              script = link;
          }
          else {
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
  const isMobile = () => {
      if (!isClient)
          return;
      const ua = window.navigator.userAgent;
      if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(ua)) {
          return true;
      }
      return false;
  };
  /**
   * @description: 跨浏览器获取可视窗口大小
   */
  const getWindow = () => {
      if (!isClient)
          return;
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
  const prohibit = () => {
      if (!isClient)
          return;
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content =
          'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.getElementsByTagName('head')[0].appendChild(meta);
  };
  /**
   * @description: 添加tdk
   */
  const tdk = (name, content) => {
      if (!isClient)
          return;
      const meta = document.createElement('meta');
      meta.name = name;
      meta.content = content;
      document.getElementsByTagName('head')[0].appendChild(meta);
  };
  /**
   * @description: 获取指定的cookie
   */
  const getCookie = (objName) => {
      if (!isClient)
          return;
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
  const log = (v) => {
      console.log(v);
      return v;
  };
  /**
   * @description: 异步打印中间产生的值
   */
  const asyLog = (v) => new Promise((resolve) => {
      console.log(v);
      resolve(v);
  });
  /**
   * @description: 函数的组合
   * @param {array} args
   */
  const compose = (...args) => (value) => args.reverse().reduce((acc, fn) => fn(acc), value);
  //如果是表达式赋值的话，不会变量提升
  /**
   * @description: 函数的柯里化
   * @param {*} func
   */
  function curry(func) {
      return function curriedFn(...args) {
          if (args.length < func.length) {
              return function () {
                  return curriedFn(...args.concat(Array.from(arguments)));
              };
          }
          else {
              return func(...args);
          }
      };
  }
  /**
   * @description: 函数的缓存
   * @param {*} fn
   */
  function memoize(fn) {
      let cache = {};
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
  const querystring = (param) => {
      let str = '';
      Object.keys(param).forEach((item, index) => {
          if (param[item] !== undefined && param[item] !== null && param[item] !== '') {
              index === 0 ? str += `${item}=${param[item]}` : str += `&${item}=${param[item]}`;
          }
      });
      return str;
  };

  exports.Draw = Draw;
  exports.asyLog = asyLog;
  exports.changeFavicon = changeFavicon;
  exports.clearBr = clearBr;
  exports.compose = compose;
  exports.converToChinaNum = converToChinaNum;
  exports.curry = curry;
  exports.fetchFile = fetchFile;
  exports.getAllQueryString = getAllQueryString;
  exports.getCookie = getCookie;
  exports.getWindow = getWindow;
  exports.isMobile = isMobile;
  exports.isWeiXin = isWeiXin;
  exports.judgeDevice = judgeDevice;
  exports.log = log;
  exports.memoize = memoize;
  exports.prohibit = prohibit;
  exports.querystring = querystring;
  exports.scriptOnLoad = scriptOnLoad;
  exports.tdk = tdk;
  exports.toast = toast;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bundle.js.map
