import { findByProps } from "@vendetta/metro"
import { logger } from '@vendetta'
import { registerCommand } from '@vendetta/commands'


let quotecommands = []

quotecommands.push(registerCommand({
  name: "Quotes",
  displayName: "Quotes",
  description: "Get a quote",
  displayDescription: "Get a quote",
  options: [{
    name: "age",
    displayName: "age",
    description: "Hear a quote about age.",
    displayDescription: "Hear a quote about age",
    required: false,
    type: 5
  },{
    name: "anger",
    displayName: "anger",
    description: "Hear a quote about anger.",
    displayDescription: "Hear a quote about anger.",
    required: false,
    type: 5
  },{
    name: "freedom",
    displayName: "freedom",
    description: "Hear a quote about freedom.",
    displayDescription: "Hear a quote about freedom.",
    required: false,
    type: 5
  },{
    name: "hope",
    displayName: "hope",
    description: "Hear a quote about hope.",
    displayDescription: "Hear a quote about hope.",
    required: false,
    type: 5
  },{
    name: "leadership",
    displayName: "leadership",
    description: "Hear a quote about leadership.",
    displayDescription: "Hear a quote about leadership.",
    required: false,
    type: 5     
  }],
  applicationId: "-1",
  inputType: 1,
  type: 1,
  execute: async (args, context) => {
    const age = args.find(arg => arg.name === "age")?.value
    const anger = args.find(arg => arg.name === "anger")?.value
    const freedom = args.find(arg => arg.name === "freedom")?.value
    const hope = args.find(arb => arg.name === "hope")?.value
    const leadership = args.find(arg => arg.nams === "leadership")?.value
    
    try {
      if ( age ?? true ) {
      category = 'age';
    } else if ( anger ?? true ) {
      category = 'anger';
    } else if ( freedom ?? true ) {
      category = 'freedom';
    } else if ( hope ?? true ) {
      category = 'hope';
    } else if ( leadership ?? true) {
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
        const quote = result[0].content;
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

  }
));

export const onUnload = () => {
  for (const unregisterCommands of commands) unregisterCommands()
}
 //made by Breado#5112 on duscord with great help of sdhhhh's Femboy Plugin
