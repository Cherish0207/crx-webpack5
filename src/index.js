import { fn1 } from "./module1";
console.log(fn1);
// webpack4会把整个module1都引入进来
// 而webpack5会优化,只引入fn1
