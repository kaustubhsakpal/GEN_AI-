import 'dotenv/config.js'
import readline from 'readline'
import {ChatMistralAI} from '@langchain/mistralai';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const model=new ChatMistralAI({
    model:"mistral-small-latest",
    apiKey:process.env.MISTRAL_API
})
console.log("enter the text =");    
rl.on("line",async (input)=>{
    if(input=="stop") {
        rl.close();
        console.log("exited the conversation scessfully")
       return;
    }
    const response = await model.invoke(input);
    console.log(response.content);
    console.log("enter the text =");
    })
