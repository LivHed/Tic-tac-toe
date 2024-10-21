# Tic tac toe

## A React and Electron app

### Choice of technologies

For this project, I decided to use **TypeScript** with React, and **Electron**. My initial steps involved writing pseudocode to break down the game's functionality step by step. After that, I researched existing designs for Tic tac toe games to gather inspiration for a clean and intuitive user interface. With that design in mind, I implemented the layout using CSS and React components. Once the structure was in place, I proceeded to translate the pseudocode into actual functionality, implementing it function by function.

### Colors and accessibility

To enhance the accessibility of the application I used the tool [Who can use](https://www.whocanuse.com/) to evaluate the contrast between my chosen color combinations. This tool helped me understand how the colors would affect users with different types of visual impairments. After making adjustments to my initial color choices, the final result is shown below:
![Color combination](./src/images/tic-tac-toe-color-combination.png)

I also used the tool [Lighthouse](https://developer.chrome.com/docs/lighthouse) to get a report of the accessibility on the page, which reminded me to add an aria-label to the square button component to improve navigation for screen reader users.

## Scripts

To run both the React app and the Electron app in development mode, run:

### `npm run dev`

## Reflections and Future Improvements

- Current Electron issue: Currently, the Electron app requires a manual reload for the game to display. The game doesn’t load immediately when the app is first opened. I have tried to solve this in different ways, but haven't found a solution yet.
- Consider to refactor the local functions within the `GameBoard` component to either utility functions within a utils file or converted into custom hooks within a hooks file to be able to reach them to unit test them.
- In hindsight I would have used the Who can use tool at the start, in the 'design phase' and not correcting the colors towards the end of the development.
- One area I’d like to improve is adopting a TDD approach. In this project, I wrote the tests after the implementation, but I aim to practice writing tests earlier in the process in future projects.
