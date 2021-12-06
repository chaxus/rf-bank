```
/**
 * @description: 判断设备
 */
export const judgeDevice = (function () {
    const ua = navigator.userAgent.toLowerCase();
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
    const ua = window.navigator.userAgent.toLowerCase();
    const flag = /micromessenger/.test(ua) && !/wxwork/.test(ua);
    return flag;
}
/**
 * @description: 改变网站在导航栏的图标
 */
export const changeFavicon = link => {
    let $favicon = document.querySelector('link[rel="icon"]');
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
  export const getAllQueryString = (url) => {
    const r = {};
    const _url = url || window.location.href;
    if (_url.split('?')[1]) {
        let str = _url.split('?')[1];
        str = str.split('&');
        str.forEach((item) => {
            const key = item.split('=')[0];
            const val = item.split('=')[1];
            r[key] = decodeURIComponent(val);
        });
    }
    return r;
  }
  /**
   * @description: 数字转化为中文数字
   */  
  export const converToChinaNum = num => {
    var arr1 = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九');
    var arr2 = new Array('', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千','万', '十', '百', '千','亿');//可继续追加更高位转换值
    if(!num || isNaN(num)){
        return '零';
    }
    var english = num.toString().split('')
    var result = '';
    for (var i = 0; i < english.length; i++) {
        var des_i = english.length - 1 - i;//倒序排列设值
        result = arr2[i] + result;
        var arr1_index = english[des_i];
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
    result = result.replace(/零+$/, '')
    //将【零一十】换成【零十】
    //result = result.replace(/零一十/g, '零十');//貌似正规读法是零一十
    //将【一十】换成【十】
    result = result.replace(/^一十/g, '十');
    return result;
  
  }

/**
 * @description: 清除空格和换行
 */
export const clearBr = (str = '') => {
    if (str.length === 0) return '';
    return str
      .replace(/\s+/g, '')
      .replace(/<\/?.+?>/g, '')
      .replace(/[\r\n]/g, '');
  }
/**
* 动态插入script/link标签
* @param {Array | String} url script/link的url队列
* @param {Element} appendee 插入的父元素 默认body
* @param {Function} callback 所有script onload回调 也可通过返回的promise执行回调
*/
export const scriptOnLoad = (urls, appendee, callback) => {
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
                resolve();
            };
        });
    });

    return new Promise((resolve) => {
        Promise.all(array).then(() => {
            if (typeof callback === 'function') {
                callback();
            }
            resolve();
        });
    });
};
/**
 * @description: 是否是移动端
 */
export const isMobile = () => {
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
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.getElementsByTagName('head')[0].appendChild(meta);
};
/**
 * @description: 添加tdk
 */
export const tdk = (name, content) => {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.getElementsByTagName('head')[0].appendChild(meta);
};
/**
 * @description: 获取指定的cookie
 */
export const getCookie = (objName) => {
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
 * @description: 绘制图片的基础方法
 */
export class canvasToImage {
    constructor(width) {
        this.width = width;
        this.base = 1;
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
    }
    /**
    * @description: 写文字
    */
    writeText = (option) => {
        const {
            fontWeight,
            fontSize,
            textColor,
            text,
            x,
            y,
            fontFamily = 'AlibabaPuHuiTiH',
        } = option;
        return new Promise(reslove => {
            this.context.font = `${fontWeight} ${fontSize * this.base}px ${fontFamily}`;
            this.context.fillStyle = textColor;
            this.context.fillText(text, x * this.base, y * this.base);
            reslove();
        });
    };
    /**
    * @description: canvas导入图片
    */
    loadingImage = (imageData) => new Promise((resolve) => {
        const image = new Image();
        image.setAttribute('crossOrigin', 'anonymous');
        image.src = imageData;
        image.onload = () => {
            resolve(image);
        };
    });
    /**
    * @description: canvas绘制二维码并设置大小和位置
    */
    drawQrcode = (option) => {
        const { url, margin = 1.5 } = option;
        return QRCode.toDataURL(url, { margin });
    };
    /**
    * @description: 图片加载到canvas中，并设置位置和大小
    */
    drawImageToCancas = (option) => {
        const { image, x, y, w, h } = option;
        return new Promise(reslove => {
            this.context.drawImage(image, x * this.base, y * this.base, w * this.base, h * this.base);
            reslove();
        });
    };
    /**
    * @description: 初始化canvas背景
    */
    initImageBackground = ({ image }) => {
        this.canvas.width = image.width;
        this.canvas.height = image.height;
        if (this.width) {
            this.base = image.width / this.width;
        }
        return this.drawImageToCancas({ image, x: 0, y: 0, w: image.width / this.base, h: image.height / this.base });
    };
    /**
    * @description: canavs转图片，导出最后的url
    */
    outputImage = () => new Promise(resolve => {
        const url = this.canvas.toDataURL('image/png');
        resolve(url);
    });
    /**
    * @description: 加载自定义字体
    */
    importFont = (fontName, fontUrl) => new Promise((resolve) => {
        const fontface = new FontFace(fontName, fontUrl);
        document.fonts.add(fontface);
        fontface.load();
        fontface.loaded.then(() => resolve());
    });

}
```
