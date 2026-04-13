const TelegramBot = require("node-telegram-bot-api");

const prompt = `Generate 5 technical interview questions (with increasing difficulty) covering the following stack and topics: React, TypeScript, Next.js, Redux/RTK, React Query, SCSS, Git, System Design, and Data Structures & Algorithms (DSA). Each question should focus on a different area from the list`;

async function runDeepsinkPrompt() {
  const url = "https://apifreellm.com/api/v1/chat";
  const apiKey = "apf_jsvp15hn4dmwqc460ouj4tn9";
  const body = {
    message: prompt,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`FreeLLM API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data?.response;
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

const ADMIN_CHAT_ID = "8081795032";
const token = "8641890777:AAE1fZ2BVAcPuh04ecrCtGmVHIqZwqKIg2s";
const bot = new TelegramBot(token, { polling: true });

const sendScheduledMessage = async () => {
  try {
    const result = await runDeepsinkPrompt();
    await bot.sendMessage(ADMIN_CHAT_ID, `[Scheduled]\n${result}`);
  } catch (err) {
    await bot.sendMessage(ADMIN_CHAT_ID, "Error getting scheduled response from Deepsink.");
  }
};

sendScheduledMessage();
