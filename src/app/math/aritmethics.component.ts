import { Component } from '@angular/core';
import { Aritmethics } from './aritmethics';
@Component({
  selector: 'aritmethics',
  template: `
  <h1>Aritmethics</h1>
  <h3>A test of promises</h3>
  <p>Input a and b, then press operation button.</p>
  <label for="txt_a">A:</label><input type="text" id="txt_a" [(ngModel)]="value_a"><br>
  <label for="txt_b">B:</label><input type="text" id="txt_b" [(ngModel)]="value_b"><br>
  <label for="txt_res">Result:</label><input type="text" id="txt_res" [ngModel]="value_res"><br>
  <div class="btn-grp">
    <button (click)="doSum(value_a, value_b)">+</button>
    <button (click)="doSub(value_a, value_b)">-</button>
    <button (click)="doMul(value_a, value_b)">*</button>
    <button (click)="doDiv(value_a, value_b)">/</button>
  </div>
  <div class="error"><small><strong>{{ value_err }}</strong></small></div>
  `,
  styles: [
    `h1 { font-family: Lato; }
    .btn-grp {
      margin-top: 25px;
    }
    .btn-grp button {
      margin-right: 3px;
      font-weight: bold;
    }
    .error {
      border-top: dotted black 1px;
      margin-top: 10px;
      color: red;
    }`,
  ],
})
export class AritmethicsComponent {
  value_a: number;
  value_b: number;
  value_res: number;
  value_err: string;

  constructor(private calc: Aritmethics) {
    this.value_err = 'No Errors.';
  }

  doSum(a: number, b: number): void {
    this.calc
      .sum(a, b)
      .then((result: number) => (this.value_res = result))
      .catch((error: string) => (this.value_err = error));
  }

  doSub(a: number, b: number): void {
    this.calc
      .substract(a, b)
      .then((result: number) => (this.value_res = result))
      .catch((error: string) => (this.value_err = error));
  }

  doMul(a: number, b: number): void {
    this.calc
      .multiply(a, b)
      .then((result: number) => (this.value_res = result))
      .catch((error: string) => (this.value_err = error));
  }

  doDiv(a: number, b: number): void {
    this.calc
      .divide(a, b)
      .then((result: number) => (this.value_res = result))
      .catch((error: string) => (this.value_err = error));
  }
}
