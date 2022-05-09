/*
 * @Author: your name
 * @Date: 2021-12-14 14:49:36
 * @LastEditTime: 2022-05-09 16:58:00
 * @LastEditors: ran
 */
import { isClient } from './index'
/**
 * @description: 移动端的toast
 * @param {*} msg
 * @param {*} duration
 */
export function toast(msg: string, duration: number = 2000) {
  if(!isClient) return 
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
      setTimeout(function() {
        // dom.style.webkitTransition = `-webkit-transform ${d}s ease-in, opacity ${d}s ease-in`;
        dom.style.opacity = '0';
        setTimeout(() => document.body.removeChild(dom), 500);
      }, duration);
}
