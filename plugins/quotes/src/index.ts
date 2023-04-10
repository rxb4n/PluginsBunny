 // Rubber Ducky #1385 helped me significantly improving my code and fix some pretty big bugs! THANK YOU!! 

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

      quoteCMD = registerCommand({

          name: "quote",

          displayName: "quote",

          description: "generates a quote.",

          displayDescription: "generates a quote",

          type: 1,

          applicationId: "-1",

          inputType: 1,

          execute: async () => {
 
            return { content: await getQuote()};
          },
        })


    }
  }


export const onUnload = () => {
  quoteCMD();
};
