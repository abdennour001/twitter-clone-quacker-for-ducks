# twitter-clone-quacker-for-ducks 🦆🦆🦆

This is a simple twitter clone (quacker for ducks 🦆). Built using NodeJS (MERN stack)

<p align='center'>
    <img src='/client/assets/example.gif' alt='G2.'/>
</p>

Tutorial from CJ Coding Garden: https://www.youtube.com/watch?v=JnEH9tYLxLk

Features:

-   Ducks can send a quack 🦆
-   Ducks can see all other quacks that have been sent 💻

## Live Demo

https://quacker.vercel.app/

## Objectives

-   [x] ⌨️ Get user input on the Client
-   [x] ➡️ Send user input from the client with fetch to the server
-   [x] 🗃 Store data in a database
-   [x] 🔍 Retrieve data from a database on the Server
-   [x] ⬅️ Retrieve data from a server on the client using Fetch
-   [x] 🙈 Hide/Show elements on the client
-   [x] ✨ Add elements to the page on the client
-   [x] 🔑 Add authentication system to the back-end
-   [x] 🔄 Update the front-end, add auth login and register forms
-   [x] 🔴 Everyone can see all quacks but only auth-user can quack
-   [x] 🚀 Deploy the client with now.sh
-   [x] 🚀 Deploy the database with atlas
-   [x] 🚀 Deploy the server with now.sh

## Front-end

-   [x] Create client folder
-   [x] Setup index.html
-   [x] Bring in Skeleton CSS
    -   http://getskeleton.com/
    -   https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
-   [x] Create Header
-   [x] Create a form
    -   [x] Name
    -   [x] Content
    -   [x] u-full-width to both inputs (full width class in skeleton)
-   [x] Use javascript to listen to form
-   [x] Hide form
-   [x] Showing loading spinner
-   [x] Log data from form

*   ✅ Get user input on the Client
*   ✅ Hide/Show elements on the client

## Back-end

-   [x] Create server folder
-   [x] npm init -y
-   [x] npm install express morgan
-   [x] Setup index.js
-   [x] Add GET / route
-   [x] Add POST /quacks route
    -   [x] log out req.body

## Front-end

-   [x] fetch POST /quacks with form data
-   [x] See the CORS error and revel in this moment
-   ✅ Send user input from the client with fetch to the server

## Back-end

-   [x] npm install cors
-   [x] Make sure the server is recieving the data
-   [x] Add JSON body parser middleware
-   [x] Validate name and content
    -   [x] Must be a string
    -   [x] Cannot be empty
-   [x] If not valid
    -   [x] Error code 422
    -   [x] Invalid quack, must contain name and content
-   [x] Setup DB Connection
    -   [x] npm install monk
    -   [x] connect to db
    -   [x] create document collection (quacks)
-   [x] If Valid
    -   [x] Create quack object with
        -   [x] name, content, created_date
    -   [x] Insert into DB
    -   [x] Respond with created quack object
-   ✅ Store data in a database

## Front-end

-   [x] Log out created quack after POST request
-   [x] Show the form
-   [x] Hide loading spinner

## Back-end

-   [x] GET /quacks
    -   [x] Respond with quacks from DB
-   ✅ Retrieve data from a database on the Server

## Front-end

-   [x] fetch GET /quacks
    -   [x] Iterate over array
    -   [x] Append each to page
    -   [x] Reverse before appending
    -   [x] Show the form
    -   [x] Hide loading spinner
-   [x] fetch GET /quacks after creating a quack
-   ✅ Retrieve data from a server on the client using Fetch
-   ✅ Hide/Show elements on the client
-   ✅ Add elements to the page on the client

## Front-end

-   [x] add login form
-   [x] add register form
-   [x] listen to the forms using javascript
-   [x] allow auth-users to post a quack
-   [x] allow auth-users to logout and hide the quack form

-   ✅ Retrieve data from login, register forms
-   ✅ Hide/Show login, register and quack forms
-   ✅ Allow auth-users to post a quack

## Back-end

-   [x] npm install bcrypt jsonwebtoken email-validator
-   [x] add authentication endpoints
-   [x] store users information in the database
-   [x] add requireAuth middleware to auth-protected endpoints

-   ✅ Auth endpoints

## Front-end

-   [x] add auth endpoints to the auth forms

## Deploy

-   ✅ Deploy server with now
    -   [x] Setup environment variables
        -   [x] Database connection
            -   process.env.MONGO_URI
    -   ✅ Show atlas
    -   [x] Deploy with environment variable
        -   now -e MONGO_URI=@quacker-db
    -   [x] Add alias
-   ✅ Deploy client folder with now
    -   [x] Set API_URL based on hostname
