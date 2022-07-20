import { runApp } from "./app";

runApp();
let myDate = '' + new Date(1658223645 * 1000);
console.log(myDate.substring(16, 21));
console.log(myDate);
// console.log(myDate.getUTCMinutes());