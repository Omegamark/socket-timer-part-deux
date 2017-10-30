This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Instructions:
* Clone the **master** branch from the repo.
* Create a `.env` file and add your twitter credentials, they should appear as below in your file:

```JavaScript
REACT_APP_TWITTER_CONSUMER_KEY=your key here!
REACT_APP_ACCESS_TOKEN_KEY=your key here!
REACT_APP_ACCESS_TOKEN_SECRET=your key here!
REACT_APP_CONSUMER_SECRET=your key here!
```

* Use either `$ npm install` or `$ yarn add` to install dependencies. I used `yarn` throughout, but `npm` ought to work just fine.
* Once the repo has been cloned, you have created your `.env` file and added your twitter credentials, in order to run the program type the following commands:
  * `$ node server` from the root directory to start the server from the `server.js`, runs on `localhost://8000`.
  * `$ yarn start` or `$ npm start` from the root directory to build and run the react app on `localhost://3000`.
* **The app is more stable when you run the server first. If at any point it seems the app is not working, check if the server is running. It crashes regularly. There is no need to restart the app most of the time, simply restart the server and the sockets should reconnect.**
