(function(o,r,n,a){"use strict";a.findByProps("sendMessage","receiveMessage");let s=[],i;var c={onLoad:function(){try{s.push(n.registerCommand({name:"quote",displayName:"quote",description:"generates a quote.",displayDescription:"generates a quote",type:1,applicationId:-1,inputType:1,execute:async function(t,g){i="inspirational";try{let e=await fetch("https://api.quotable.io/quotes/random",{headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error(`${e.status}: ${e.statusText}`);return{content:await e.json()}}catch(e){if(e instanceof TypeError)return r.logger.log("TypeError occurred",e),{content:"There was an error processing your request. Please try again later. Check the debug logs for further info."};if(e instanceof SyntaxError)return r.logger.log("SyntaxError occurred",e),{content:"There was an error processing your request. Please try again later. Check the debug logs for further info."};if(e instanceof RangeError)return r.logger.log("RangeError occurred",e),{content:"There was an error processing your request. Please try again later. Check the debug logs for further info."};if(e instanceof Error)return r.logger.log("Unknown error occurred",e),{content:"There was an error processing your request. Please try again later. Check the debug logs for further info."}}}}))}catch(t){return r.logger.log(t),{content:"CLIENT-SIDE Error. Check the logs"}}}};const u=function(){for(const t of commands)t()};return o.default=c,o.onUnload=u,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta,vendetta.commands,vendetta.metro);
