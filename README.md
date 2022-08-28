
# React Test Task

Implement a solution to display price tickers data on the UI in realtime.

Price data is available from a locally running service. Any additional visualisations to indicate how prices have changed would be a plus. Testing is also an important part to this exercise.

Сompleted :
- application should connect to the locally running service
- application should render price changes for some tickers in real time

As a bonus I can implemented:
- any additional visual effects to highlight positive or negative changes in the prices
- the possibility to specify interval time by user
- the possibility to add/remove ticker from watching group

Were used the next technologies:
- React (preferable with hooks)
- Redux-Toolkit
- Socket.io/socket.io-client - to connect to the service
- SCSS
- Testing Library

## Running the local service
1. Open a new bash shell
2. ```cd server```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

## Run your application
1. Open a new bash shell
2. ```cd client```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```

## Run the tests
1. Open a new bash shell
2. ```cd client```
3. ```npm run test``` or ```yarn test```

# Price Service Usage

URL:
```http://localhost:4000```

Price tickers are real-time via web-sockets.
