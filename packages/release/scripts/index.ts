// import {
//   composeTaskQueue,
//     getVersion,
//     updateVersion,
//     npmAuth,
//     npmPub,
//     gitPush,
// } from '@iicoding/release';
//
// type TFn = (...args: any []) => void ;
//
// // TODO: 类型导出
// const taskQueue = [
//     getVersion,
//     updateVersion,
//     npmAuth,
//    (next: TFn) => {
//       console.log('发布之前的 task');
//      next({ a: 1 });
//    },
//    (next: TFn, params: unknown) => {
//      console.log('正在发布 获取到的参数为:', params);
//      setTimeout(() => {
//        next();
//      }, 3000);
//    },
//    (next: TFn) => {
//      console.log('发布之后的 task');
//      next();
//    },
//     gitPush,
// ];
//
// const startRelease = composeTaskQueue(taskQueue);
//
// startRelease();

import {startExecution} from "../src/utils/compose";

startExecution();
