/*
 * @Author: your name
 * @Date: 2021-12-14 14:49:36
 * @LastEditTime: 2021-12-14 14:49:37
 * @LastEditors: Please set LastEditors
 */
/**
 * @description: 移动端的toast
 * @param {*} msg
 * @param {*} duration
 */
 export function toast(msg, duration = 2000) {
    duration = Number.isNaN(duration) ? 3000 : duration;
    let m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = 'max-width:60%;min-width: 150px;padding:0 14px;min-height: 40px;color: rgb(255, 255, 255);line-height: 150%;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 14px;';
    document.body.appendChild(m);
    setTimeout(function() {
      let d = 0.5;
      m.style.webkitTransition = `-webkit-transform ${d}s ease-in, opacity ${d}s ease-in`;
      m.style.opacity = '0';
      setTimeout(function() { document.body.removeChild(m); }, d * 1000);
    }, duration);
  }