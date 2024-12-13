# Evaluate News NLP

Project that uses meaningcloud for sentiment-analysis that uses webpack.

## Project Setup
- in terminal cd into starter_project and run 'npm install' for installing all the dependencies
- go to [meaningcloud](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/examples) and create an account. You will receive a key though mail or if you used github etc login you will find it in your account. Copy your key and create .env file and put in there like this:

  API_KEY=your_key_value

- now you can:
   1. run tests with: 'npm run test'
   2. build client project for dev environment with: 'npm run build-dev'. Access client app at http://localhost:3000/ 
   3. build client project for prod environment with: 'npm run build-prod'. You should see the dist folder added after running it
   4. start server with: 'npm run start'. Access app at http://localhost:8000/ 

- in the app you can enter a link and see the senyiment analysis result
- You only have 100 credits for your meaning cloud free plan! It uses 1 credit for 500 worrds

