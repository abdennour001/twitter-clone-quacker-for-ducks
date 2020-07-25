# twitter-clone-quacker-for-ducks 🦆🦆🦆

This is a simple twitter clone (quacker for ducks 🦆). Built using NodeJS (MERN stack)

Tutorial from CJ Coding Garden: https://www.youtube.com/watch?v=JnEH9tYLxLk

Features:

-   Ducks can send a quack 🦆
-   Ducks can see all other quacks that have been sent 💻

## Objectives

-   [ ] ⌨️ Get user input on the Client
-   [ ] ➡️ Send user input from the client with fetch to the server
-   [ ] 🗃 Store data in a database
-   [ ] 🔍 Retrieve data from a database on the Server
-   [ ] ⬅️ Retrieve data from a server on the client using Fetch
-   [ ] 🙈 Hide/Show elements on the client
-   [ ] ✨ Add elements to the page on the client
-   [ ] 🚀 Deploy the client with now.sh
-   [ ] 🚀 Deploy the database with atlas
-   [ ] 🚀 Deploy the server with now.sh

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

## Deploy

-   ✅ Deploy server with now
    -   [ ] Setup environment variables
        -   [ ] Database connection
            -   process.env.MONGO_URI
    -   ✅ Show atlas
    -   [ ] Deploy with environment variable
        -   now -e MONGO_URI=@quacker-db
    -   [ ] Add alias
-   ✅ Deploy client folder with now
    -   [ ] Set API_URL based on hostname
