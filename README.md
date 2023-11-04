# html-to-adf 📄➡️🔀
## Description 📝
`html-to-adf` is a Node.js application that provides an API to convert HTML code into the Atlassian Document Format (ADF) 🔄. It leverages WebAssembly for processing and offers a simple and secure way to perform conversions via HTTP requests 🌐.

## Prerequisites 📋
Before you begin, ensure you have Node.js installed on your machine 🛠️. This project was developed with Node.js version 21.1.0.

## Installation 💿
Clone the repository to your local machine:
```bash
git clone https://github.com/bianca-git/html-to-adf.git
cd html-to-adf
```
Install the necessary dependencies:
```bash
npm install
```

## Configuration 🔧
Before starting the server, you need to set up an environment variable named API_SECRET. This secret is required to authenticate requests to the convert endpoint 🔑. You can set this variable in a .env file at the root of your project:
```plaintext
API_SECRET=your_api_secret_here
```
Make sure to replace `your_api_secret_here` with your actual API secret string.

## Starting the Application 🚀
To start the application, run:
```bash
npm start
```
The server will start and listen on the default port 3000, unless configured otherwise via the PORT environment variable.

## Usage 🛠️
### Convert Endpoint 🔁
To convert HTML to ADF, make a `POST` request to the `/convert` endpoint with the HTML content you wish to convert. You must include the `API_SECRET` in the request header for authentication.

Example POST Request:
```bash
curl --location --request POST 'http://localhost:3000/convert' \
--header 'X-API-SECRET: your_api_secret_here' \
--header 'Content-Type: text/html' \
--data-raw '<p>Your HTML code here</p>'
```
The server will respond with the converted ADF JSON object 📈.

## Features 🌟
- Convert Function: The core feature of this application is the convert function, which processes HTML and transforms it into the ADF format 📊. 
- This is particularly useful when integrating with Atlassian products that support ADF 🤝.

## Credits 👏
This project utilizes the [htmltoadf](https://github.com/wouterken/htmltoadf) library by Wouter Kenens, which is the core dependency for the conversion functionality 🙌.

## License 📄
This project is open-source and available under the MIT License.