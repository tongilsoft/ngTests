export class Aritmethics {
  constructor() {}

  /**
   * Returns a promise that resolves the sum of a + b or rejects with a error message.
   * If a or b are undefined: rejects with a error message.
   * Otherwise: resolves returning the result of the sum of a + b.
   */
  sum(a: number, b: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const undefErrMsg = 'is undefined. Can not sum.';
      if (a === undefined) {
        reject(`a ${undefErrMsg}`);
      } else if (b === undefined) {
        reject(`b ${undefErrMsg}`);
      } else {
        const result = a + b;
        resolve(result);
      }
    });
  }

  /**
   * Returns a promise that resolves the substract of a - b or rejects with a error message.
   * If a or b are undefined: rejects with a error message.
   * Otherwise: resolves returning the result of the substract of a - b.
   */
  substract(a: number, b: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const undefErrMsg = 'is undefined. Can not substract.';
      if (a === undefined) {
        reject(`a ${undefErrMsg}`);
      } else if (b === undefined) {
        reject(`b ${undefErrMsg}`);
      } else {
        const result = a - b;
        resolve(result);
      }
    });
  }

  /**
   * Returns a promise that resolves the multiply of a * b or rejects with a error message.
   * If a or b are undefined: rejects with a error message.
   * Otherwise: resolves returning the result of the substract of a * b.
   */
  multiply(a: number, b: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const undefErrMsg = 'is undefined. Can not multiply.';
      if (a === undefined) {
        reject(`a ${undefErrMsg}`);
      } else if (b === undefined) {
        reject(`b ${undefErrMsg}`);
      } else {
        const result = a * b;
        resolve(result);
      }
    });
  }

  /**
   * Returns a promise that resolves the multiply of a * b or rejects with a error message.
   * If a or b are undefined: rejects with a error message.
   * Otherwise: resolves returning the result of the substract of a * b.
   */
  divide(a: number, b: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const undefErrMsg = 'is undefined. Can not divide.';
      const zeroDivErrMsg = 'is zero. Can not divide by zero.';
      if (a === undefined) {
        reject(`a ${undefErrMsg}`);
      } else if (b === undefined) {
        reject(`b ${undefErrMsg}`);
      } else {
        if (b === 0) {
          reject(`b ${zeroDivErrMsg}`);
        } else {
          const result = a / b;
          resolve(result);
        }
      }
    });
  }
}
