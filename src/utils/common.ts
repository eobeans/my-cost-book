/**
 * 节流
 * 在给定时间内只有第一次的操作会返回结果
 * 结合了防抖的思路：在delay时间内生成定时器，一旦到了delay的时间就返回结果
 * 当用户只点击了一次的时候，在delay时间后得到结果
 * 当用户点击了多次的时候，在delay时间后得到第一次的结果，其余的被节流阀忽视掉
 * @author eobeans
 * @version 1.0.0
 * @param {Function} fn 要包装的回调函数
 * @param {number} delay 延迟时间，单位ms，默认500
 * @return {Function} 被节流函数劫持的新的函数
 */

function throttle(fn:Function, delay = 500) {
  let last = 0;
  let timer:any = null;
  
  return function () { 
    let args = arguments;
    let now = +new Date();
    
    if (now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(null, args);
      }, delay);
    } else {
        last = now;
        fn.apply(null, args);
    }
  }
}

/**
 * 防抖
 * 在delay时间后得到结果
 * 如果没等到delay的时间一直触发则永远也得不到结果
 * @author eobeans
 * @version 1.0.0
 * @param {Function} fn 要包装的回调函数
 * @param {number} delay 延迟时间，单位ms，默认500
 * @return {Function} 被防抖函数劫持的新的函数
 */
function debounce(fn:Function, delay = 500) {
  let timer:any = null;
  return function () {
    let args = arguments;

    if(timer) {
        clearTimeout(timer);
    }
    
    timer = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  }
}

export default {
	throttle,
	debounce
}