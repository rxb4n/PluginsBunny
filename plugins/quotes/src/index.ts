
import { logger } from "@vendetta";
import { registerCommand } from "@vendetta/commands";
import { findByProps } from "@vendetta/metro";

const MessageActions = findByProps("sendMessage", "receiveMessage");

let quoteCMD = [];
let category;

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
          execute: async (args, ctx) => {
            category = "inspirational";
            try {
              const response = await fetch(
                `'https://api.api-ninjas.com/v1/quotes?category=${category}`,
                {
                  headers: {
                    "X-Api-Key": "et6XfFJdPxmYaOgW3lgvRnT2wj1aU5ea6HHMxLxW",
                    "Content-Type": "application/json",
                  },
                }
              ).then((res) => res.json());
              return { content: response };
            } catch (error) {
              if (error instanceof TypeError) {
                logger.log("TypeError occurred", error);
                return { content: "There was an error processing your request. Please try again later." };
              } else if (error instanceof SyntaxError) {
                logger.log("SyntaxError occurred", error);
                return { content: "There was an error processing your request. Please try again later." };
              } else if (error instanceof RangeError) {
                logger.log("RangeError occurred", error);
                return { content: "There was an error processing your request. Please try again later." };
              } else if (error instanceof Error) {
                logger.log("Unknown error occurred", error);
                return { content: "There was an error processing your request. Please try again later." };
              }
            }
          },
        })
      );
    } catch (err) {
      logger.log(err);
      return { content: "CLIENT-SIDE Error. Check the logs" };
    }
  },
};

export const onUnload = () => {
  for (const unregisterCommands of commands) unregisterCommands();
};
