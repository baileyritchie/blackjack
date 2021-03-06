
# Welcome to my game of Blackjack!

Build with React and Tailwind CSS for styling.

## Fundamental Game Logic
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust or dealer card is higher than player (after staying), dealer wins.
5. Compare cards and declare winner.

## Data Structure and Requirements:

In Blackjack, we need to represent the data as cards given to the player or dealer. Each card in the game is unique, as it belongs to one suit and has 13 unique "interger" representing values. Since the ideal value of cards to hold is 21, there are only a few pieces of data that need to be stored in each round of the game. As a result, the most obvious direction for a data structure begins with an array. 

However, a single layer array may be complex, as there would need to be requirements for data parsing/strict ordering in order to sure ensure that the right value was calculated for both dealer and player. A better approach involves either a double nested set of arrays, or an array of objects representing the cards held.

Overall, the best option is to use a **double nested array**, as it does not require us to store the naiming identifier or "key" to determine each value. In other words, the data involved with a single card only requires 2 values - the suit and the numeric value, and these can be easily ordered in an array structure comprised of strings. However, if the game was more complex and the user had to keep multiple cards and follow many rules (such as in Poker) a data structure composed of objects may be a better idea. 

## Available Scripts

How to run:

1. clone this repo 
2. npm install 
3. npm start (locally)
4. npm build (production)

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

