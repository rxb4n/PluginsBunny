import { registerCommand } from "@vendetta/commands";

let helloCmd;

export default {

  onLoad: () => {

    helloCmd = registerCommand({

      name: "hello",

      displayName: "hello",

      description: "Returns a greeting",

      displayDescription: "Returns a greeting",

      execute: () => "hello",

      applicationId: -1,

      inputType: 0,

      type: 0,

    });

  },

  onUnload: () => {

    helloCmd();

  },

};


