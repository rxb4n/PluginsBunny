import { registerCommand } from "@vendetta/commands";

let helloCmd;

export default {

  onLoad: () => {

    helloCmd = registerCommand({

      name: "hello",

      displayName: "Hello",

      description: "Sends a greeting message",

      displayDescription: "Sends a greeting message",

      options: [],

      execute: (args, context) => {

        return { content: "Hello!" };

      },

      applicationId: -1,

      inputType: 1,

      type: 1,

    });

  },

  onUnload: () => {

    helloCmd();

  },

};












