/*
 * @Author: ran
 * @Date: 2022-05-09 16:54:44
 * @LastEditors: ran
 * @LastEditTime: 2022-05-09 16:54:47
 */
interface Process extends NodeJS.Process {
    browser?: string;
  }
  
export const isClient = (process as Process).browser;