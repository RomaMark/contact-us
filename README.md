# Contact us

[Source Code](https://github.com/RomaMark/contact-us)

## Instructions for setup

1. Clone the project

   `git clone https://github.com/RomaMark/contact-us.git`

2. Go to the project directory

   `cd contact-us`

3. Get all required dependencies

   `npm i`

4. Start the project

   `npm start`

5. App is running in the development mode

   Open [link](http://localhost:3000) to view it in the browser

## Explanation of important choices for implementation and technologies in the project

a. **Typescript** - For this project I chosed Typescript because coding with TS makes it looks clean and simple. Typescript improves code's readability and maintainbility and also allows static typing. I've also trying to follow "Code As Documentation" principle.

b. **Tailwind CSS** - For styling the application I used Tailwind CSS because it pairs well with React, provides flexibility and helps with quick and simple design.

c. **React Flags Select** - This library helped me to implement country selector with their flags. Usage of the library was very clear. I've also added the ability to search for country because as a developer and as a User I see big advantage in it.

d. **State Management** - React's built-in <useState> was used for managing component-level state, such as handling form input changes and displaying error messages. It allowed me to keep the application's state localized within individual components.

e. **Structuring** - This project follows a modular structure where each component responsible for a specific part of the UI. I believe that files and folders organizing make person easier to understand the application's structure and logic.

f. **Webpack** - It was my very first experience hearing and working with bundlers, so unfortunately I spent a lot of my time on the configurations but didn't get a desired result. I chosed Webpack because found in the internet that it was the best module bundler to work with Typescript. P.S. I'd really appreciate the feedback about it's implementation in my project.

Furthermore I really wanted to add an Error message as you have on your webpage when something is missing in the input form but couldn't get the same result, so decided to leave it with my own corrections. :)

## Bundle size analysis

1. What impacts bundle size?

   - As I've already said I didn't make a bubdler but I think that third-party libraries and CSS framework impacts my bundle size.

2. How this project optimized or could be optimized?

   - To optimize it I didn't leave unused code in the project, don't have unused styles and don't have unused modules.
   - My application could be optimized with production build configuration, maybe CSS code could be also optimized with PurgeCSS

### Author

- [@RomaMark](https://github.com/RomaMark)
