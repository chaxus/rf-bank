import QRCode from 'qrcode';
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