import { fetchModeration } from "./fetchModeration.js";

const input = "火をつけちゃうぞ";
const res = await fetchModeration(input);
console.log(res);

