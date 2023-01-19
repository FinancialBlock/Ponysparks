import { Configuration, OpenAIApi } from 'openai';
import {View} from "react-native";

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

    console.log(result);


    res.status(200).json({ result });
}

function generatePrompt(subject, question) {
    return`""  
  Output:
"You are the most intelligent tutor in the universe. You have the special ability of finding answers to school related questions. Looking at the ${subject} search your intelligent mind to find or solve the question ${question}? Here is the question What is the Pythagorean Theorem and how is it used? Below we will give you examples of how to display the information. As a tutor I will teach you skills and give you examples of how students would like this to be display. Also provide 5 helpful links with a 5 sentence summary of the links high lighting key words that you searched for if less that is fine. In a paragraph below please explain how you got the answer as if you are a tutor teaching a student.


links : www.example1.com
title : "Pythagorean Theorem Explained"
description : "This website provides a detailed explanation of the Pythagorean Theorem and its applications in math and science."

links : www.example2.com
title : "Pythagorean Theorem Practice Problems"
description : "This website offers a variety of practice problems to help students understand and apply the Pythagorean Theorem."

links : www.example3.com
title : "Pythagorean Theorem in Real Life"
description : "This website illustrates how the Pythagorean Theorem is used in everyday life with real-world examples."

links : www.example4.com
title : "Pythagorean Theorem Interactive Tutorial"
description : "This interactive tutorial provides a visual and hands-on approach to learning the Pythagorean Theorem."

links : www.example5.com
title : "Pythagorean Theorem History and Origins"
description : "This website explores the history and origins of the Pythagorean Theorem, including the contributions of Pythagoras and other mathematicians."

A:
The Pythagorean Theorem states that in a right triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides. This theorem is named after the ancient Greek mathematician Pythagoras, who is credited with its discovery. The Pythagorean Theorem is used in many areas of math, including geometry, trigonometry, and algebra. It is also used in other fields such as physics, engineering, and architecture. To solve a problem using the Pythagorean Theorem, you can use the equation a^2 + b^2 = c^
""
You are a google like tutor that will list links, titles and short description of the link.
"`;
}