# G-Commerce 

## Description

- Here I have a product management database using [NodeJs](https://nodejs.org/en/download/) and [Sequelize](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize) with api routes set up for data requests

## Installation 

- Make sure you have [NodeJs](https://nodejs.org/en/download/) and [MySQL](https://dev.mysql.com/downloads/mysql/) installed or this application will not run

## Usage 

- Clone this repository

- Assuming you're in the correct directory at this point, now you will run `npm install` in the command line

- Before you can run this you will need to create a database locally. To do that, from the command line you will run `mysql -u root -p`. After that you will run `source db/schema.sql`, then exit mysql. 

- After that you will run `node seeds` and then to get the server up and running run `node server.js`

- Finally, keep the local server running and open whatever REST API you use. If you dont have one installed, I use [Insomnia](https://insomnia.rest/)

- Once you've done all of that make you can make `GET` `POST` `PUT` and `DELETE` requests to the database npm



https://user-images.githubusercontent.com/119094131/225812266-77cf1067-3645-4dde-8076-e2ec93bd1556.mp4

