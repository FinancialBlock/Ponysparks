import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    const { gender, age, height, currentWeight,  weightGoal, muscles, caloriesDaily} = req.body;
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: generatePrompt(gender, age, height, currentWeight,  weightGoal,muscles, caloriesDaily),
        temperature: 0.6,
        max_tokens: 2048,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
}
function generatePrompt(gender, age, height, currentWeight,  weightGoal, muscles, caloriesDaily) {
    return `suggest 7 workouts for each day of the week a workout plan for a ${age} year old ${gender} who is ${height} that currently weights ${currentWeight} but goal is to weigh  ${weightGoal} pounds. Who prefers to work out their ${muscles} and usually consumes around ${caloriesDaily} `;
}