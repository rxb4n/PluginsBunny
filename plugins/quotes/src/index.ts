 // Rubber Ducky #1385 helped me significantly improving my code and fix some pretty big bugs! THANK YOU!! 

import { logger } from "@vendetta";

import { registerCommand } from "@vendetta/commands";

let quoteCMD = [];

async function getQuote() {
  const response = await fetch("https://api.quotable.io/quotes/random");
  const data = await response.json();
  return data['0']['content']['author'];
}
//const quote = await getQuote();

export const onLoad = () => {
    try {
      quoteCMD = registerCommand({

          name: "quote",

          displayName: "quote",

          description: "generates a quote.",

          displayDescription: "generates a quote",

          type: 1,

          applicationId: -1,

          inputType: 1,

          execute: async () => {
            const quote = await getQuote();
            return { content: `${quote.text} ~ ${quote.author}`};
          },
        })

    } catch (err) {
      logger.log(err);

      return {
        content: "Error. Check the logs and contact Breado#5112 on Discord. ",
      };
    }
  }


export const onUnload = () => {
  quoteCMD();
};
