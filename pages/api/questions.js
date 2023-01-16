import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    const { subject, question } = req.body;
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: generatePrompt(subject, question),
        temperature: 0.6,
        max_tokens: 2048,
    });

    
    const links = completion.data.choices[0].text.match(/links : (.*)/g);
    const titles = completion.data.choices[0].text.match(/title : "(.*)"/g);
    const descriptions = completion.data.choices[0].text.match(/description : "(.*)"/g);
    const answer = completion.data.choices[0].text.split('A:')[1];

    const result = {
        answer: answer.trim(),
        links: links.map(link => link.split(': ')[1]),
        titles: titles.map(title => title.split(': ')[1]),
        descriptions: descriptions.map(description => description.split(': ')[1]),
    };

    res.status(200).json({ result });
}

function generatePrompt(subject, question) {
    return `""You are the most intelligent tutor in the universe. You have the special ability of finding answers to school related questions. Looking at the ${subject} search your intelligent mind to find or solve the question? Here is the question ${question}. Below we will give you examples of how to display the information. As a tutor I will teach you skills and give you examples of how students would like this to be display. Also provide 5 helpful links with a 5 sentence summary of the links high lighting key words that you searched for if less that is fine. In a paragraph below please explain how you got the answer as if you are a tutor teaching a student.

links : www.example1.com
title : "Example Title 1"
description : "This is a description of Example Title 1"

links : www.example2.com
title : "Example Title 2"
description : "This is a description of Example Title 2"

links : www.example3.com
title : "Example Title 3"
description : "This is a description of Example Title 3"

links : www.example4.com
title : "Example Title 4"
description : "This is a description of Example Title 4"

links : www.example5.com
title : "Example Title 5"
description : "This is a description of Example Title 5"

A:
""
You are a google like tutor that will list links, titles and short description of the link.
"`;
}