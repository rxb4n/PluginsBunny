import { logger } from "@vendetta";
import { registerCommand } from "@vendetta/commands";
import { findByProps } from '@vendetta/metro';

let quoteCMD = [];

const qoute = async function () {
  const response = await fetch (`https://api.quotable.io/quotes/random`);
  const resp = await response.json();
  return resp["0"];
}

const Clyde = findByProps('createBotMessage'); 
const Channels = findByProps('getLastSelectedChannelId'); 
const Messages = findByProps("sendMessage");

function sendReply(channelID, content) {
  const channel = channelID ?? Channels?.getChannelId?.();
  const msg = Clyde.createBotMessage({ channelId: channel, content: '' });

  msg.author.username = 'Quoter';

  if (typeof content === 'string') {
    msg.content = content;
  } else {
    Object.assign(msg, content);
  }

  Messages.receiveMessage(channel, msg);
}
 
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
          execute: async () => {
            sendReply(message.channel.id, ["Test"])
           // await qoute() 
            
          }
            
          }
        })
      );

    } catch (err) {
      logger.log(err);
      return { content: "Error. Check the logs and contact Breado#5112 on Discord. " };
    }
  },
};

export const onUnload = () => {
  for (const unregisterCommands of commands) unregisterCommands();
};

