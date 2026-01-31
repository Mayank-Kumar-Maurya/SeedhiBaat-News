const OpenAi = require("openai");
const {GoogleGenAI} = require("@google/genai");

const aiGem = new GoogleGenAI(
    {
        apiKey: process.env.GENAI_API_KEY,
    }
);


const ai = new OpenAi(
    {
        apiKey: process.env.OPEN_AI_KEY 
    }
);

let textAi = async(message)=>
{
    const response = await ai.chat.completions.create(
        {
            messages: [{role: "system", content: "You act like the News Repoter, you have to tell what-what trending sensitive topics in india is going on. You have to tell what-what things does the government has done in past and what they don't"},
                // {role: "user", content: `prompt: "${message}"`}
            ],
            model: "gpt-4.1-mini",
        }
    );

    return response.choices[0].message;
}


let textAiGem = async()=>
    {
        try {
            const response = await aiGem.models.generateContent({
                model: "gemini-2.5-flash-lite",
                config: {
                    systemInstruction: `You act like the News Repoter, give the current situation live in detain proper in news formate, you have to tell everything truly without biase to any side of the govenment only truth where it is bad, harmfull or anything. 
                    Return only the JSON response in this format: 
                    {
                    title:<topic>(short to the point, which convey full news),
                    content:<content>(detail information about that),
                    positive_review:<interger type percentage>(tells the public impact on that),
                    negative_review:<integer type percentage>(tells the public impact on that),
                    }
                    without any your unwanted text, generate atleast 10 responses`
                },
                contents: `you have to tell what-what trending sensitive topics in india is going on. You have to tell what-what things does the government has done in past and what they don't, what-what steps has been taken by people and by govenment againt or with `,
            });
        
            console.log("genai res", response.text);
            // let jsonConvetedRes = convertToJson(response.text);
            return response.text;
        } catch (error) {
            console.log("err occured sending to open ai",error);
            // return routeOpenAI(message);
            return;
        }
    }
    

module.exports = {textAi, textAiGem}

// messages: [
//     {role: "system", content: `You act like the News Repoter, you have to tell everything truely without biase to any side of the govenment only truth where it is bad, harmfull or anything, etc`},

//     {role: "user", content: `you have to tell what-what trending sensitive topics in india is going on. You have to tell what-what things does the government has done in past and what they don't`}
// ]