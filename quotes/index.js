(function(e,o,a){"use strict";let r=[];const c=async function(){const t=await fetch("https://api.quotable.io/quotes/random");if(!t.ok)throw new Error(`Failed to fetch quote: ${t.status} ${t.statusText}`);const n=await t.json();if(!n.content||!n.author)throw new Error("Empty response from the API");return`${n.content} - ${n.author}`};var s={onLoad:function(){try{r.push(a.registerCommand({name:"quote",displayName:"quote",description:"generates a quote.",displayDescription:"generates a quote",type:1,applicationId:-1,inputType:1,execute:async function(){return{content:await c()}}}))}catch(t){return o.logger.log(t),{content:"Error. Check the logs and contact Breado#5112 on Discord. "}}}};const u=function(){for(const t of commands)t()};return e.default=s,e.onUnload=u,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.commands);
