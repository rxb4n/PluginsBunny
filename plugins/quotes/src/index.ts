
import { logger } from "@vendetta";
import { registerCommand } from "@vendetta/commands";
import { findByProps } from "@vendetta/metro";
import https from "https";

const MessageActions = findByProps("sendMessage", "receiveMessage");
let quoteCMD = [];

export default {
  onLoad: () => {
    try {
      quoteCMD.push(registerCommand({
        name: "quote",
        displayName: "quote",
        description: "generates a quote.",
        displayDescription: "generates a quote",
        type: 1,
        //@ts-ignore
        applicationId: -1,
        inputType: 1,
        execute: async (args, ctx) => {
          let category: string;

          function getRandomWord(): Promise<{content: any}> {
            const words: string[] = [
              'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best', 'birthday',
              'business', 'car', 'change', 'communications', 'computers', 'cool', 'courage', 'dad', 'dating', 'death',
              'design', 'dreams', 'education', 'environmental', 'equality', 'experience', 'failure', 'faith', 'family',
              'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god',
              'good', 'government', 'graduation', 'great', 'happiness', 'health', 'history', 'home', 'hope', 'humor',
              'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 'legal',
              'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success'
            ];

            category = words[Math.floor(Math.random() * words.length)];

            return new Promise<{content: any}>((resolve, reject) => {
              const options = {
                hostname: 'api.api-ninjas.com',
                path: '/v1/quotes?category=' + category,
                headers: { 'X-Api-Key': 'et6XfFJdPxmYaOgW3lgvRnT2wj1aU5ea6HHMxLxW'}
              };

              https.get(options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                  data += chunk;
                });

                res.on('end', () => {
                  const result = JSON.parse(data);
                  resolve({ content: result });
                });

              }).on('error', (error) => {
                reject(new Error(error.message));
              });
            });
          }

          getRandomWord().then((result) => {
            return {content: result.content }
          }).catch((error) => {
            logger.log(error);
          });

        }
      }));
    } catch (err) {
      logger.log(err);
      return {content: "err. check the logs"};
    }
  }
};

export const onUnload = () => {
  for (const unregisterCommands of commands) unregisterCommands();
};
