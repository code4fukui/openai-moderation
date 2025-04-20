import { fetchAPI } from "https://code4fukui.github.io/ai_chat/openai.js";

//const defmodel = "text-moderation-latest";
const defmodel = "omni-moderation-latest";

export const fetchModeration = async (input, model = defmodel) => {
  const res = await fetchAPI("https://api.openai.com/v1/moderations", {
    model,
    input,
  });
  return res;
};

console.log(res);
