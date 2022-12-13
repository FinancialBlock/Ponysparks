const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
    prompt: generatePrompt(image, artist),
    n: 2,
    size: "1024x1024",
});
function generatePrompt(image, artist) {
    return `May you draw a ${artist} character that is described as ${image} you are the best artist in the entire universe. The detail of your paintings are very crisp.
     `;
}