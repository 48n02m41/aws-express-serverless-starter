
# Express Lambda QuickStart for AWS
This quick-start project allows you to easily build serverless web applications/services and RESTful APIs using the [Express](https://expressjs.com/) framework.

Run the local.js file to test the application locally.
```
npm install
npm start
```
Write your Express app logic in **src/app.js**. See comments in **serverless.yml** for additional documentation.

### Prerequisites for Deployment
-   [Serverless](https://serverless.com/) must be installed and configured for AWS.
-   AWS CLI installed in your machine

## Deployment

Run the following command to deploy the project to AWS as a Lambda function.

```
npm run deploy
```
or 
```
serverless deploy
```

The AWS url of your project will appear in the console output.
