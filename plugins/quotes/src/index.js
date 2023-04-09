//import { findByProps } from "@vendetta/metro"

import { logger } from '@vendetta'

import { registerCommand } from '@vendetta/commands'

let quotecommands = []

quotecommands.push(registerCommand({

  name: "Quotes",

  displayName: "Quotes",

  description: "Get a quote",

  displayDescription: "Get a quote",

  choices: [{

    name: "age",

    displayName: "age",

    value:  "display"

  },{

    name: "anger",

    displayName: "anger",

    value: "display"

  }, {

    name: "love",

    displayName: "love",

    value: "display"

  },{

    name: "hope",

    displayName: "hope",

    value: "display"

  }, {

    name: "leadership",

    displayName: "leadership",

    value:"display"



  }],

  required: false,

  applicationId: "",
  inputType: 1,
  type: 1
  
  
 execute: async (args, context) => {
  try {
    if (args.find((o: any) => o.name === "age")) {
      category = 'age';
    } else if (args.find((o: any) => o.name === "anger")) {
      category = 'anger';
    } else if (args.find((o: any) => o.name === "love")) {
      category = 'love';
    } else if (args.find((o: any) => o.name === "hope")) {
      category = 'hope';
    } else if (args.find((o: any) => o.name === "leadership")) {
      category = 'leadership';
    }

    let quote;

    // Make API request
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: { 'X-Api-Key': 'lBJi2EN//oMq77g6yAYDfg==uqSODuxtuE2VY1T4'},
      contentType: 'application/json',
      success: function(result) {
        quote = result[0].content;
      },
      error: function ajaxError(jqXHR) {
        logger.log('Error: ', jqXHR.responseText);
        return 'Oops! Something went wrong with the API. Check tha logs.';
      }
    }); 

    return { quote };

  } catch (err) {
    logger.log(err);
    return { content: "An error occured while trying to get a quote. Check the Debug logs for more info! "};
  }
}





      

export const onUnload = () => {

  for (const unregisterCommands of commands) unregisterCommands()

}

 //made by Breado#5112 on duscord with great help of sdhhhh's Femboy Plugin
