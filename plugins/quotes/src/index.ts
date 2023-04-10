import { logger } from "@vendetta";

import { registerCommand } from "@vendetta/commands";

let quoteCMD = [];

function quote() {
  return fetch("https://api.quotable.io/quotes/random")
    .then((response) => response.json())
    .then((data) => data[0]);
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
             quote().then((result) => {
              const quoteObject = { content: result };
              return quoteObject;
              }).then((result) => {
              return { content: result };
           })
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

