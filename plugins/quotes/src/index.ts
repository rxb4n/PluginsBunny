 

import { logger } from "@vendetta";

import { registerCommand } from "@vendetta/commands";

let quoteCMD = [];

async function getQuote() {
  const response = await fetch("https://api.quotable.io/quotes/random");
  const data = await response.json();
  return data['0']['content'];
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
            return { content: await getQuote() };
          },
        })

    } catch (err) {
      logger.log(err);

      return {
        content: "Error. Check the logs and contact Breado#5112 on Discord. ",
      };
    }
  },


export const onUnload = () => {
  quoteCMD();
};
