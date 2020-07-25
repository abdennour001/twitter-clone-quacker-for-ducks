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
-   [ ] Bring in Skeleton CSS
    -   http://getskeleton.com/
    -   https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
-   [ ] Create Header
-   [ ] Create a form
    -   [ ] Name
    -   [ ] Content
    -   [ ] u-full-width to both inputs (full width class in skeleton)
-   [ ] Use javascript to listen to form
-   [ ] Hide form
-   [ ] Showing loading spinner
-   [ ] Log data from form

*   ✅ Get user input on the Client
*   ✅ Hide/Show elements on the client

## Back-end

-   [x] Create server folder
-   [x] npm init -y
-   [x] npm install express morgan
-   [x] Setup index.js
-   [ ] Add GET / route
-   [ ] Add POST /quacks route
    -   [ ] log out req.body

## Front-end

-   [ ] fetch POST /quacks with form data
-   [ ] See the CORS error and revel in this moment
-   ✅ Send user input from the client with fetch to the server

## Back-end

-   [ ] npm install cors
-   [ ] Make sure the server is recieving the data
-   [ ] Add JSON body parser middleware
-   [ ] Validate name and content
    -   [ ] Must be a string
    -   [ ] Cannot be empty
-   [ ] If not valid
    -   [ ] Error code 422
    -   [ ] Invalid quack, must contain name and content
-   [ ] Setup DB Connection
    -   [ ] npm install monk
    -   [ ] connect to db
    -   [ ] create document collection (quacks)
-   [ ] If Valid
    -   [ ] Create quack object with
        -   [ ] name, content, created_date
    -   [ ] Insert into DB
    -   [ ] Respond with created quack object
-   ✅ Store data in a database

## Front-end

-   [ ] Log out created quack after POST request
-   [ ] Show the form
-   [ ] Hide loading spinner

## Back-end

-   [ ] GET /quacks
    -   [ ] Respond with quacks from DB
-   ✅ Retrieve data from a database on the Server

## Front-end

-   [ ] fetch GET /quacks
    -   [ ] Iterate over array
    -   [ ] Append each to page
    -   [ ] Reverse before appending
    -   [ ] Show the form
    -   [ ] Hide loading spinner
-   [ ] fetch GET /quacks after creating a quack
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
