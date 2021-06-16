/*
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-05-12 14:08:38
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-16 17:23:19
 */
// 获取随机数
export const uuid = (e: number, type: string) => {
  e = e || 32;
  let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  if (type == 'number') {
    t = '0123456789'
  }
  let a: number = t.length, n: string = ""
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}