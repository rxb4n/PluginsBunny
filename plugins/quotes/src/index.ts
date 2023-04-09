import { logger } from "@vendetta";

import { registerCommand } from "@vendetta/commands";

import { findByProps } from "@vendetta/metro";

const MessageActions = findByProps("sendMessage", "receiveMessage");

let quoteCMD = [];

var category;

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

          //@ts-ignore

          applicationId: -1,

          inputType: 1,

          execute: async (args, ctx) => {

            category = "inspirational";

            try {

              const response = await fetch(

                `https://api.api-ninjas.com/v1/quotes?category=${category}`,

                {

                  headers: {

                    "X-Api-Key": "et6XfFJdPxmYaOgW3lgvRnT2wj1aU5ea6HHMxLxW",

                    "Content-Type": "application/json",

                  },

                }

              );

              const data = await response.json();

              return { content: data };

            } catch (error) {

              logger.log(error);

              return { content: "Error. Check the logs" };

            }

          },

        })

      );

    } catch (err) {

      logger.log(err);

      return { content: "Error. Check the logs" };

    }

  },

};

export const onUnload = () => {

  for (const unregisterCommands of commands) unregisterCommands();

};
