import { registerCommand } from "@vendetta/commands";

let helloCmd;

export default {

  onLoad: () => {

    helloCmd = registerCommand({

      name: "hello",

      displayName: "hello",

      description: "Returns a greeting",

      displayDescription: "Returns a greeting",

    



      inputType: ApplicationCommandInputType.BUILT_IN_TEXT,
      execute(args, context){
        return { content: "Greetings" }
      }



    });

  },

  onUnload: () => {

    helloCmd();

  },

};


