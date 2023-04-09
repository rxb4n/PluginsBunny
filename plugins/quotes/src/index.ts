import { logger } from "@vendetta";
import { registerCommand } from "@vendetta/commands";

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

                execute: async (args, ctx) => {
                    return { content: "Ello, i work"};
                }
            }))
        } catch (err) {
            logger.log(err)
            return {content: "err. check the logs"};
        }
    }
}
