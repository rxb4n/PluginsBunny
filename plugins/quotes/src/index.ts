import { logger } from "@vendetta";
import { registerCommand } from "@vendetta/commands";


let quoteCMD = [];

// Code from the facts plugin
const qoute = async function () {
  const response = await fetch (`https://api.quotable.io/quotes/random`);
    if (!response.ok) {

    throw new Error(`Failed to fetch quote: ${response.status} ${response.statusText}`);

  }

  const resp = await response.json();

  if (!resp.content || !resp.author) {

    throw new Error("Empty response from the API");

  }

  return `${resp.content} - ${resp.author}`;
}


export default {
  onLoad: () => {
    try {
      quoteCMD.push(
        registerCommand({
          name: "quote",
          displayName: "quote",
          description: "generates a quote.",
          displayDescription: "generates a quote",
          type: 1,
          applicationId: -1,
          inputType: 1,
          execute: async () => { 
            return { content: await qoute() }
          }
        })
      );

    } catch (err) {
      logger.log(err);
      return { content: "Error. Check the logs and contact Breado#5112 on Discord. " };
    }
  },
};

export const onUnload = () => {
  for (const unregisterCommands of commands) unregisterCommands();
};
