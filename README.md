# GPT-based API Documentation Generator

This command-line tool generates Swagger documentation for API endpoints using OpenAI's GPT model. It takes a description, framework, request payload, and response payload as input and returns Swagger documentation based on the provided details.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Requirements

- Node.js (v14 or newer)
- Git (for cloning the repository)
- An OpenAI API key (you can obtain one by signing up at https://beta.openai.com/signup/)

## Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/yourusername/gpt-api-doc-generator.git
```

2. Navigate to the project folder and install the dependencies:

```
cd gpt-api-doc-generator
npm install
```

3. Set up your OpenAI API key. Create a `.env` file in the root directory of the project and add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key
```

## Usage

1. In the terminal, navigate to the project directory.

2. Run the command with the required arguments: description, framework, request payload, and response payload. Make sure to replace the placeholders with your actual values:

```
node index.js "API description" "API framework" "Request payload" "Response payload"
```

Make sure to replace the placeholders with your actual values.

3. The tool will generate and output the Swagger documentation based on the provided details.

### Example Input

1. Description: `Retrieve a list of users`
2. Request payload (JSON, one-line format): `{"page": 1, "pageSize": 10}`
3. Response payload (JSON, one-line format): `{"data": [{"id": 1, "name": "John Doe", "email": "john.doe@example.com"}, {"id": 2, "name": "Jane Doe", "email": "jane.doe@example.com"}], "total": 100, "page": 1, "pageSize": 10}`
4. Desired output format (JSON or YAML): `JSON`

Use this test input to run the command line application and generate Swagger documentation with descriptions for each field in the request and response payloads.


## How to Contribute

1. Fork the repository on GitHub.

2. Clone your fork to your local machine:

```
git clone https://github.com/reinaldoperes/gpt-api-doc-generator.git
```

3. Create a new branch for your changes:

```
git checkout -b my-feature-branch
```

4. Make your changes and improvements to the code.

5. Add and commit your changes:

```
git add .
git commit -m "My new feature or improvement"
```

6. Push your changes to your fork:

```
git push origin my-feature-branch
```

7. Create a pull request from your fork to the original repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
