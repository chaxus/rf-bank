/*
 * @Author: ran
 * @Date: 2021-12-06 15:56:34
 * @LastEditors: ran
 * @LastEditTime: 2022-02-23 20:13:12
 */
import QRCode from "qrcode";
interface writeText {
  fontWeight: number;
  fontSize: number;
  textColor: string;
  text: string;
  x: number;
  y: number;
  fontFamily?: string;
}
interface drawQrcode {
  url: string;
  margin?: number;
}
interface drawImageToCancas {
  image: HTMLImageElement;
  x: number;
  y: number;
  w: number;
  h: number;
}
/**
 * @description: 绘制图片的基础方法
 */
export class Draw {
  width: number;
  base: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  constructor(width: number) {
    this.width = width;
    this.base = 1;
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
  }
  /**
   * @description: 写文字
   */
  write = (option: writeText) => {
    const {
      fontWeight,
      fontSize,
      textColor,
      text,
      x,
      y,
      fontFamily = "AlibabaPuHuiTiH",
    } = option;
    return new Promise((reslove) => {
      // 可以通过!.断言解决
      if (this.context) {
        this.context.font = `${fontWeight} ${
          fontSize * this.base
        }px ${fontFamily}`;
        this.context.fillStyle = textColor;
        this.context.fillText(text, x * this.base, y * this.base);
      }
      reslove(this.context);
    });
  };
  /**
   * @description: canvas导入图片
   */
  loadImg = (imageData: string) =>
    new Promise((resolve) => {
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
  qrcode = (option: drawQrcode) => {
    const { url, margin = 1.5 } = option;
    return QRCode.toDataURL(url, { margin });
  };
  /**
   * @description: 图片加载到canvas中，并设置位置和大小
   */
  comImg = (option: drawImageToCancas) => {
    const { image, x, y, w, h } = option;
    return new Promise((reslove) => {
      if (this.context) {
        this.context.drawImage(
          image,
          x * this.base,
          y * this.base,
          w * this.base,
          h * this.base
        );
      }
      reslove(this.context);
    });
  };
  /**
   * @description: 初始化canvas背景
   */
  setBack = (image: HTMLImageElement) => {
    this.canvas.width = image.width;
    this.canvas.height = image.height;
    if (this.width) {
      this.base = image.width / this.width;
    }
    return this.comImg({
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
  outImg = () =>
    new Promise((resolve) => {
      const url = this.canvas.toDataURL("image/png");
      resolve(url);
    });
  /**
   * @description: 加载自定义字体
   */
  loadFont = (fontName: string, fontUrl: string) =>
    new Promise((resolve) => {
      const fontface = new FontFace(fontName, fontUrl);
      document.fonts.add(fontface);
      fontface.load();
      fontface.loaded.then(() => resolve(fontface));
    });
}
