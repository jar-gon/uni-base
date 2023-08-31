export * from '@/uni_modules/uni-easyinput/components/uni-easyinput/common.js';
export * from '@/uni_modules/uni-forms/components/uni-forms/utils.js';

export function deepClone(obj) {
  let tagObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !(obj[key] instanceof Date) &&
      !(obj[key] instanceof RegExp)
    ) {
      tagObj[key] = deepClone(obj[key]);
    } else if (typeof obj[key] === 'function') {
      tagObj[key] = new Function(`return ${obj[key].toString()}`)();
    } else {
      tagObj[key] = obj[key];
    }
  }
  return tagObj;
}

export function valuesTrim(values) {
  const params = {};
  Object.keys(values).forEach(x => (params[x] = typeof values[x] === 'string' ? values[x].trim() : values[x]));
  return params;
}

export const isEmptyObject = obj => {
  return JSON.stringify(obj) === '{}';
};

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
