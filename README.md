# Tic tac toe

## A React and Electron app

To improve the accessibility on the page I used the tool [Who can use](https://www.whocanuse.com/) to check the color combination. A tool that can show how color contrast can affect different people with visual impairments.
After some changes of my original choice of colors it resulted in this:
![Color combination](./src/images/tic-tac-toe-color-combination.png)

I also used the tool [Lighthouse](https://developer.chrome.com/docs/lighthouse) to get a report of the accessibility on the page, which reminded me to add an aria-label to the square button component.

## Available Scripts

To run both the React app and the Electron app in development mode, run:

### `npm run dev`

## Thoughts

- Current state of the Electron app that I haven't been able to solve yet - You have to reload the Electron app one time for the game to show, it doesn't show directly when the app is opened up.
- Consider to refactor the local functions within the GameBoard component to either utility functions within a utils file or to custom hooks within a hooks file to be able to reach them to unit test them.
- In hindsight I would have used the Who can use tool at the start in the 'design phase' and not correcting the colors towards the end of the development.
