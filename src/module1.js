import { fn3 } from './module2';
export function fn1() {
  console.log('fn1');
}
export function fn2() {
  console.log("fn2");
  fn3();
}