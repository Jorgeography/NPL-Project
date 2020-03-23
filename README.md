# Evaluate News Articles with NLP

This web tool allows users to run Natural Language Processing (NLP) on articles found on websites. This tool will send the user back information about the article, whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Installation

1. Clone the repository
2. cd into the cloned repository:
    * npm install 
3. Create a new .env file that contains these credentials:
    * AppId (from Aylien API)
    * APIkey
    * Endpoint="https://api.aylien.com/api/v1"
4. Run: npm run build-dev (to run development mode of the app)
5. Run: npm run build-prod (to run the production mode of the app)
6. Run: npm run start 

## Functions
This web tool uses Webpack, Express, Node, Sass, and Service Workers to send the user back information on the article that was requested. Aylien API then analyzes the article while the web tool verifies that this is a valid URL.