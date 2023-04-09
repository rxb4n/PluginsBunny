// Plugin created by Breado#5112
// Check out sdhhhhs Femboy plugin, it helped me coding a functional one
import { logger } from "@vendetta";
import { registerCommand } from "@vendetta/commands";
import { findByProps } from "@vendetta/metro"

const MessageActions = findByProps("sendMessage", "receiveMessage")
let quoteCMD = [];
var category;
var resultData;

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

          

          function getRandomWord(): Promise<{content: any}>{
            const words: string[] = [
              'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best', 'birthday',
              'business', 'car', 'change', 'communications', 'computers', 'cool', 'courage', 'dad', 'dating', 'death',
              'design', 'dreams', 'education', 'environmental', 'equality', 'experience', 'failure', 'faith', 'family',
              'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god',
              'good', 'government', 'graduation', 'great', 'happiness', 'health', 'history', 'home', 'hope', 'humor',
              'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 'legal',
              'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success'
            ];
            return new Promise<{content: any}>((resolve, reject) => {

            $.ajax({

              method: 'GET',

              url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,

              headers: { 'X-Api-Key': 'et6XfFJdPxmYaOgW3lgvRnT2wj1aU5ea6HHMxLxW'},

              contentType: 'application/json',

              success: function(result) {

               resolve({ content: result });

             },

              error: function ajaxError(jqXHR) {
    
               reject(new Error(jqXHR.responseText));

             }

        });

  });

}
          getRandomWord().then((result) => {
            return {content: result.content }
          }).catch((error) => {
            logger.log(error);
          });

          
          
          
          
      }))
    } catch (err) {
      logger.log(err)
      return {content: "err. check the logs"};
    }
  }
}

  

export const onUnload = () => {

    for (const unregisterCommands of commands) unregisterCommands()

}


                
