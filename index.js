const readline = require("readline");
const axios = require("axios");
const { openaiApiKey } = require("./config");

const generateSwaggerDocumentation = async (description, request, response, outputFormat) => {
  try {
    const openaiApiUrl = "https://api.openai.com/v1/engines/davinci/completions";

    const prompt = `Generate Swagger documentation for an API endpoint in ${outputFormat.toUpperCase()} and a simple description for each field format based on the following details:
- Description: ${description}
- Request payload: ${request}
- Response payload: ${response}

Instructions:
 - Generate only the fields that are present in both the request and response payload.
 - Generate only the documentation in the given format.
 - I don't want to see any Swagger definitions, only the documentation.

${outputFormat.toUpperCase()} Swagger documentation:
`;

    const requestOptions = {
      method: "post",
      url: openaiApiUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
      data: {
        prompt: prompt,
        max_tokens: 300,
        n: 1,
        stop: null,
        temperature: 0.5,
      },
    };

    const result = await axios(requestOptions);
    return result.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error generating Swagger documentation:", error.message);
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

(async () => {
  const description = await question("Enter the description of the API endpoint: ");
  const request = await question("Enter the request payload (JSON): ");
  const response = await question("Enter the response payload (JSON): ");
  const outputFormat = await question("Enter the desired output format (JSON or YAML): ");

  const swaggerDocumentation = await generateSwaggerDocumentation(description, request, response, outputFormat);
  console.log("\nGenerated Swagger documentation:\n");
  console.log(swaggerDocumentation);

  rl.close();
})();
