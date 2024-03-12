import type { TFn} from "../type";

export const compose = (middleware: TFn []) => {
  if (!Array.isArray(middleware)) {
    throw 'middleware must be an array';
  }

  const middlewareLength = middleware.length;

  if (middlewareLength === 0) {
    return <T>(arg: T) => arg;
  }

  if (middlewareLength === 1) {
    return middleware[0];
  }

  const dispatch = (idx: number, ...params: any[]) => {
    // 如果 调度到最后一个函数了 就应该退出
    if (idx === middlewareLength) return;

    const crtMiddleware = middleware[idx];

    crtMiddleware((...nextParams: any []) => {
      dispatch(++idx, ...nextParams);
    }, ...params);
  }

  return (...params: any) => dispatch(0, params);
};

export const startExecution = compose(
    [
      (next: any, params: any) => {
        console.log('one', params);
        next({ one: true });
      },
      (next: any, params: any) => {
        console.log('two', params);
        next({ two: true });
      },
      (next: any, params: any) => {
        console.log('three', params);
        next({ three: true });
      },
    ]
);

startExecution('icd');
