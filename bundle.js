"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Draw", {
  enumerable: true,
  get: function get() {
    return _draw.Draw;
  }
});
exports.converToChinaNum = exports.compose = exports.clearBr = exports.changeFavicon = exports.asyLog = void 0;
exports.curry = curry;
Object.defineProperty(exports, "fetchFile", {
  enumerable: true,
  get: function get() {
    return _fetch.fetchFile;
  }
});
exports.isMobile = exports.getWindow = exports.getCookie = exports.getAllQueryString = void 0;
exports.isWeiXin = isWeiXin;
exports.log = exports.judgeDevice = void 0;
exports.memoize = memoize;
exports.tdk = exports.scriptOnLoad = exports.querystring = exports.prohibit = void 0;
Object.defineProperty(exports, "toast", {
  enumerable: true,
  get: function get() {
    return _toast.toast;
  }
});

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _draw = require("./util/draw");

var _fetch = require("./util/fetch");

var _toast = require("./util/toast");

var _index = require("./util/index");

/**
 * @description: 判断设备
 */
var judgeDevice = function () {
  if (!_index.isClient) return;
  var ua = window.navigator.userAgent.toLowerCase();

  if (/ipad|ipod/.test(ua)) {
    return 'ipad';
  } else if (/android|iphone/.test(ua)) {
    return 'mobile';
  }

  return 'pc';
}();
/**
 * @description:  判断是否是微信环境
 */


exports.judgeDevice = judgeDevice;

function isWeiXin() {
  if (!_index.isClient) return;
  var ua = window.navigator.userAgent.toLowerCase();
  var flag = /micromessenger/.test(ua) && !/wxwork/.test(ua);
  return flag;
}
/**
 * @description: 改变网站在导航栏的图标
 */


var changeFavicon = function changeFavicon(link) {
  if (!_index.isClient) return;
  var $favicon = document.querySelector('link[rel="icon"]');

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


exports.changeFavicon = changeFavicon;

var getAllQueryString = function getAllQueryString(url) {
  if (!_index.isClient) return;
  var r = {};

  var _url = url || window.location.href;

  if (_url.split('?')[1]) {
    var str = _url.split('?')[1];

    var arr = str.split('&');
    arr.forEach(function (item) {
      var key = item.split('=')[0];
      var val = item.split('=')[1];

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


exports.getAllQueryString = getAllQueryString;

var converToChinaNum = function converToChinaNum(num) {
  var arr1 = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九');
  var arr2 = new Array('', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'); //可继续追加更高位转换值

  if (!num || isNaN(num)) {
    return '零';
  }

  var english = num.toString().split('');
  var result = '';

  for (var i = 0; i < english.length; i++) {
    var des_i = english.length - 1 - i; //倒序排列设值

    result = arr2[i] + result;
    var arr1_index = Number(english[des_i]);
    result = arr1[arr1_index] + result;
  } //将【零千、零百】换成【零】 【十零】换成【十】


  result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十'); //合并中间多个零为一个零

  result = result.replace(/零+/g, '零'); //将【零亿】换成【亿】【零万】换成【万】

  result = result.replace(/零亿/g, '亿').replace(/零万/g, '万'); //将【亿万】换成【亿】

  result = result.replace(/亿万/g, '亿'); //移除末尾的零

  result = result.replace(/零+$/, ''); //将【零一十】换成【零十】
  //result = result.replace(/零一十/g, '零十');//貌似正规读法是零一十
  //将【一十】换成【十】

  result = result.replace(/^一十/g, '十');
  return result;
};
/**
 * @description: 清除空格和换行
 */


exports.converToChinaNum = converToChinaNum;

var clearBr = function clearBr() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (str.length === 0) return '';
  return str.replace(/\s+/g, '').replace(/<\/?.+?>/g, '').replace(/[\r\n]/g, '');
};
/**
 * 动态插入script/link标签
 * @param {Array | String} url script/link的url队列
 * @param {Element} appendee 插入的父元素 默认body
 * @param {Function} callback 所有script onload回调 也可通过返回的promise执行回调
 */


exports.clearBr = clearBr;

var scriptOnLoad = function scriptOnLoad(urls, appendee, callback) {
  if (!_index.isClient) return;
  urls = Array.isArray(urls) ? urls : [urls];
  var array = urls.map(function (src) {
    var cssReg = /\w*.css$/;
    var script;

    if (cssReg.test(src)) {
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = src;
      script = link;
    } else {
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
    }

    var bodyElement = document.getElementsByTagName('body')[0];
    var currentAppendee = appendee || bodyElement;
    currentAppendee.appendChild(script);
    return new Promise(function (resolve) {
      script.onload = function () {
        resolve(script);
      };
    });
  });
  return new Promise(function (resolve) {
    Promise.all(array).then(function () {
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


exports.scriptOnLoad = scriptOnLoad;

var isMobile = function isMobile() {
  if (!_index.isClient) return;
  var ua = window.navigator.userAgent;

  if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(ua)) {
    return true;
  }

  return false;
};
/**
 * @description: 跨浏览器获取可视窗口大小
 */


exports.isMobile = isMobile;

var getWindow = function getWindow() {
  if (!_index.isClient) return;

  if (typeof window.innerWidth !== 'undefined') {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  };
};
/**
 * @description: 禁止用户缩放
 */


exports.getWindow = getWindow;

var prohibit = function prohibit() {
  if (!_index.isClient) return;
  var meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
  document.getElementsByTagName('head')[0].appendChild(meta);
};
/**
 * @description: 添加tdk
 */


exports.prohibit = prohibit;

var tdk = function tdk(name, content) {
  if (!_index.isClient) return;
  var meta = document.createElement('meta');
  meta.name = name;
  meta.content = content;
  document.getElementsByTagName('head')[0].appendChild(meta);
};
/**
 * @description: 获取指定的cookie
 */


exports.tdk = tdk;

var getCookie = function getCookie(objName) {
  if (!_index.isClient) return;
  var arrStr = document.cookie.split('; ');

  for (var i = 0; i < arrStr.length; i++) {
    var item = arrStr[i].split('=');

    if (item[0] == objName) {
      return unescape(item[1]);
    }
  }

  return '';
};
/**
 * @description: 打印中间产生的值
 */


exports.getCookie = getCookie;

var log = function log(v) {
  console.log(v);
  return v;
};
/**
 * @description: 异步打印中间产生的值
 */


exports.log = log;

var asyLog = function asyLog(v) {
  return new Promise(function (resolve) {
    console.log(v);
    resolve(v);
  });
};
/**
 * @description: 函数的组合
 * @param {array} args
 */


exports.asyLog = asyLog;

var compose = function compose() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (value) {
    return args.reverse().reduce(function (acc, fn) {
      return fn(acc);
    }, value);
  };
}; //如果是表达式赋值的话，不会变量提升

/**
 * @description: 函数的柯里化
 * @param {*} func
 */


exports.compose = compose;

function curry(func) {
  return function curriedFn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length < func.length) {
      return function () {
        return curriedFn.apply(void 0, (0, _toConsumableArray2.default)(args.concat(Array.from(arguments))));
      };
    } else {
      return func.apply(void 0, args);
    }
  };
}
/**
 * @description: 函数的缓存
 * @param {*} fn
 */


function memoize(fn) {
  var cache = {};
  return function () {
    var key = JSON.stringify(arguments);
    cache[key] = cache[key] || fn.apply(fn, arguments);
    return cache[key];
  };
}
/**
 * @description: 传入对象，返回对象请求序列化的字符串
 * @param {Object} 
 * @return {string}
 */


var querystring = function querystring(param) {
  var str = '';
  Object.keys(param).forEach(function (item, index) {
    if (param[item] !== undefined && param[item] !== null && param[item] !== '') {
      index === 0 ? str += "".concat(item, "=").concat(param[item]) : str += "&".concat(item, "=").concat(param[item]);
    }
  });
  return str;
};

exports.querystring = querystring;
