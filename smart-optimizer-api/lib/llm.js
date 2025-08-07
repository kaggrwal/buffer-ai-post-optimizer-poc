require("dotenv").config();
const { InferenceClient } = require("@huggingface/inference");

const client = new InferenceClient(process.env.HF_TOKEN);

/**
 * @param {{ baseText: string; platform: string; tone?: string }} input
 * @returns {Promise<string>}
 */
async function generateOptimizedText({ baseText, platform, tone }) {
  const prompt = `Optimize the following post for ${platform}. ${tone ? `Use a ${tone} tone.` : ""} Post: "${baseText}"`;

  const chatCompletion = await client.chatCompletion({
    model: "deepseek-ai/DeepSeek-V3-0324", // Or use another supported model
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return chatCompletion.choices?.[0]?.message?.content || "No response";
}

module.exports = {
  generateOptimizedText,
};
