import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default async function (req, res) {
    const { subject, question, } = req.body;
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: generatePrompt(subject, question),
        temperature: 0.6,
        max_tokens: 2048,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
}
function generatePrompt(subject, question) {
    return `""You are the most intelligent tutor in the universe. You have the special ability of finding answers to school related questions. Looking at the ${subject} search your intelligent mind to find or solve the question? Here is the question ${question}. Below we will give you examples of how to display the information. As a tutor I will teach you skills and give you examples of how students would like this to be display. Also provide 5 helpful links with a 5 sentence summary of the links high lighting key words that you searched for if less that is fine. In a paragraph below please explain how you got the answer as if you are  a tutor teaching a student.
"Web Browser","I want you to act as a text based web browser browsing an imaginary internet. You should only reply with the contents of the page, nothing else. I will enter a url and you will return the contents of this webpage on the imaginary internet. Don't write explanations. Links on the pages should have numbers next to them written between []. When I want to follow a link, I will reply with the number of the link. Inputs on the pages should have numbers next to them written between []. Input placeholder should be written between (). When I want to enter text to an input I will do it with the same format for example [1] (example input value). This inserts 'example input value' into the input numbered 1. When I want to go back i will write (b). When I want to go forward I will write (f). My first prompt is google.com"

I am a highly intelligent question answering Whiz. If you ask me a question that is rooted in truth and can be found in the category, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown may you rephrase the question".

Q: What is human life expectancy in the United States?
A: Human life expectancy in the United States is 78 years.

Q: Who was president of the United States in 1955?
A: Dwight D. Eisenhower was president of the United States in 1955.

Q: Which party did he belong to?
A: He belonged to the Republican Party.

Q: What is the square root of banana?
A: Unknown

Q: How does a telescope work?
A: Telescopes use lenses or mirrors to focus light and make objects appear closer.

Q: Where were the 1992 Olympics held?
A: The 1992 Olympics were held in Barcelona, Spain.

Q: How many squigs are in a bonk?
A: Unknown

Q: May you help me find the answer to this ${subject} question? Here is an example of the question ${question}. Also provide 5 helpful links that you searched for if less that is fine.
I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown
A:
""
You are a google like tutor that will list links, titles and short description of the link.

links : www.google.com
title : "Google" 
description : "Google is a company that teaches Google. It is a place that teaches the"
 ""`;
}

