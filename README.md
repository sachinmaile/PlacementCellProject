# PlacementCellProject

 <h1 align="center">Placement Cell  📝</h1> 
<p align="center">
 🖊️ An interface for coding ninjas placement cell to keep records of students and schedule interviews with different companies <br>
     This App built using <a href="https://ejs.co/">EJS</a>, <a href="https://www.mongodb.com/">MongoDB</a>, <a href="https://expressjs.com/">ExpressJs</a>, <a href="https://nodejs.org/en/">NodeJs</a> and <a href="http://www.passportjs.org/">PassportJS</a>
</p>

### Features

- Sign up / Sign in forms for employees
- Add a new student to the list of students
- Allocate and schedule interview with different companies and update their result status
- Download reports of students in csv format

### Tech Stack

Node , Express, Mongodb , EJS , javaScript , html, css

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        npm start || nodemon index.js
   ````
### Basic initialization flow followed for any NodeJS Project

  1. "npm init" to get the package.json
  2. "npm i express" to get the node modules
  3. "npm i ejs" for using template engine
  4. "app.use(express.urlencoded())" is used to get the string conversion from req params
  5. "app.use(express.static('assets'))" is used for accessing the static files
  6. "npm i -g nodemon" for using nodemon which is helpful is running the server again after immediate changes
  7. "npm i mongoose" to setup the mongoDB database
  8. Inorder to ignore the node modules from saving to github we need to create ".gitignore" file and add the text "node_modules/"
  9. "npm i express-ejs-layouts" for creating layouts
  10. "npm i cookie-parser" is used for cookie generation
  11. "npm i passport" and "npm i passport-local" is used for authentication using passport.js
  12. "npm i express-session" is used to generate cookie in passport authentication
  13. "npm i connect-mongo" is used to keep the user signed in even after server restart
  14. "npm i node-sass-middleware" is used for setting up scss
  15. "npm i connect-flash" is used for flash notification
  16. "npm i dotenv" is used to store environmental variables. For this create .env file and while restoring variables use "require('dotenv').config()"
