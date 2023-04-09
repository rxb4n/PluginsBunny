//import { findByProps } from "@vendetta/metro"

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
    
    description: "Get a quote about age",
    
    displayDescription: "Get a quote about age",
    required: false


  },{

    name: "anger",

    displayName: "anger",

    description: "Get a quote about anger",
    
    displayDescription: "Get a quote about anger",
    required: false


  }, {

    name: "love",

    displayName: "love",

    description: "Get a quote about love",
    
    displayDescription: "Get a quote about love",
    required: false

  },{

    name: "hope",

    displayName: "hope",

    description: "Get a quote about hope",
    
    displayDescription: "Get a quote about hope",
    required: false


  }, {

    name: "leadership",

    displayName: "leadership",

    description: "Get a quote about leadership",
    
    displayDescription: "Get a quote about leadership",
    required: false



  }],

  applicationId: "-1",
  inputType: 1,
  type: 1,
  
  
  execute: async (args, context) => {
   try {

    const age = args.find(arg => arg.name === "age")?.value
    const anger = args.find(arg => arg.name === "anger")?.value
    const love= args.find(arg => arg.name === "love")?.value
    const leadership = args.find(arg => arg.name === "leadership")?.value
    const hope = args.find(arg => arg.name === "hope")?.value

    if (age ?? true) {
      category = "age";
    } else if ( anger ?? true ) {
      category = "anger";
    } else if ( love ?? true) {
      category = "love";
    } else if ( leadership ?? true ) {
      category = "leadership"
    } else {
      category = "hope";
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
    return { content: "An error occurred while trying to get a quote. Check the Debug logs for more info! "};
  }
}





onUnload: () => {

  quotecommand();

},

 //made by Breado#5112 on duscord with great help of sdhhhh's Femboy Plugin
