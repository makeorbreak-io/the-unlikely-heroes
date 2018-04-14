#	Unlucky-Stars / Wildcards power

## Make or Break 2018
### Tim Lai, Miruna Iliescu, Gustavo Silva, Mariana Quintela
### Win or lose, we learn together!

Project built for the hackathon Make Or Break contest, 2018 edition. 

--- 

## Team notes

The project is structured as follows:

  * Under `src`, you can find everything related to the code of the project. 
  * Under `src/api`, you can find everything related with the API service.
  * Under `src/website`, you can find everything related with the website service of the project.
  * File `src/api/server.js` will start the server that supports the API server. 
  * Under `src/api/controller dir`, you can available options for the UIs to consume. They should not directly feed from the model for software design principles.
  * Under `src/api/routes dir`, you can find all API routes supported. Try following a structure similar to the example to allow having a central server and multiple routes defined and handled outside the project.
  * Under `src/api/model dir`, you can find the database schema, which for now, only contains Country. 
  * Under `src/website/`, you can find everything related to the website. In here, you should split javascript and css files. `server.js` will start the website running. This file should define the sitemap's.

--- 
### TODOs

  * Agree on the schema and redefine the mongo schema.
  * If we agree on using MongoDB, the localhost needs to have MongoDB installed and running. Some configurations have to be added. (Easy task)
  * Find a way to tackle the non-concrete data we found in the agreements. This may imply on sacrificing interaction in the page.
