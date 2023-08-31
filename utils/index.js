export * from '@/uni_modules/uni-easyinput/components/uni-easyinput/common.js';
export * from '@/uni_modules/uni-forms/components/uni-forms/utils.js';

// export function debounce(func, delay = 300) {
//   let timer;
//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       func.apply(this, arguments);
//     }, delay);
//   };
// }

// export function throttle(fn, delay) {
//   let timer = null,
//     remaining = 0,
//     previous = new Date();
//   return function () {
//     let now = new Date(),
//       remaining = now - previous,
//       args = arguments,
//       context = this;
//     if (remaining >= delay) {
//       if (timer) {
//         clearTimeout(timer);
//       }
//       fn.apply(context, args);
//       previous = now;
//     } else {
//       if (!timer) {
//         timer = setTimeout(function () {
//           fn.apply(context, args);
//           previous = new Date();
//         }, delay - remaining);
//       }
//     }
//   };
// }
