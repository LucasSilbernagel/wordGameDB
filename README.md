# wordGameDB

> [!IMPORTANT]
> There is a more up to date version of this project built with Next.js: https://github.com/LucasSilbernagel/word-game-db-v2

## Description

wordGameDB is a read-only REST API built with the MERN stack (MongoDB, Express, React, and Node.js). It is intended to be used for educational purposes by anyone who would like to practice their coding skills by building a word game that incorporates an API.

## Example Implementation

### Hangman

#### Live Link
https://lucassilbernagel.github.io/hangman/

#### GitHub Repository
https://github.com/LucasSilbernagel/hangman

## Run Locally

In order to run this application locally, you must have node installed on your computer. To check if you already have it installed, enter `node -v` in your terminal. If you do not have node, you can install it here: https://nodejs.org/en/

Once you have confirmed that node is installed, `cd` into a folder on your computer and run the following command to clone the repository:

`git clone https://github.com/LucasSilbernagel/wordGameDB.git`

Then `cd` into the root folder and open it in your code editor. For Visual Studio Code:

`cd wordGameDB`
`code .`

Next, follow these steps to set up a free database with MongoDB Atlas:

https://docs.atlas.mongodb.com/getting-started

- When adding a connection IP address, click Allow Access from Anywhere. 
- Make sure to save your username and password when creating a database user. 
- For connection method, I recommend clicking on MongoDB Compass. Installing and using MongoDB Compass is optional, but clicking on a connection method will show you your database connection string.

In the root folder of your app, create a new file called `.env` and save your connection string in it with a key of DB. Make sure to replace the password variable with your database user password. Your username should already be populated. The file should now look something like this:

`DB = mongodb+srv://demoUser:12345pass@cluster0.ywxa5.mongodb.net/test`

There should be no quotation marks or brackets in this file.

Next, you will need to un-comment some code in order to set up an endpoint and a form that will allow you to post new items to the database:
- routes > api.js lines 5 to 10
- client > src > components > Home > Home.js lines 1 and 8

Next, install all of the required dependencies for both the root folder and the client folder. `cd` into the client folder and run `npm install` Then return to the root folder and run `npm install` again.

To start up the app, make sure you are in the root folder and then run `npm run dev` in your terminal. This should start both your app's server and front end in a single terminal window, and launch the app in a new browser tab. You are now running the app locally!

On the homepage you will see a form to add a new word to your database. Test it out, and if you view your database in MongoDB Atlas or MongoDB Compass, you should see the data there! You may have to refresh the database. You can continue using this form to add items, or you can clone your first item directly in the database and delete items as necessary.

Before deploying, remember that you un-commented some code earlier to be able to post new data. Don't forget to delete or comment out that code again before deploying, otherwise anyone who uses your app will be able to add new data to your database. Alternatively, you could set up user authentication to allow users who are logged in to post new items!
