#	Unlucky-Stars / Wildcards power

## Make or Break 2018

Project built for the hackathon Make Or Break contest, 2018 edition. 


## Team notes

The project is structured as follows:

  * Under `src`, you can find everything related to the code of the project. 
  * `server.js` will start the server that supports the API server and the web page.
  * Under `controller dir`, you can available options for the UIs to consume. They should not directly feed from the model for software design principles.
  * Under `routes dir`, you can find all API routes supported.
  * Under `model dir`, you can find the database schema, which for now, only contains Country. 
  * Under `ui`, you can find the files related to the website. In here, you should split javascript and css files, depending on the engines you use. `views dir` should contain the HTML file.


### TODOs

  * Agree on the schema and redefine the mongo schema.
  * If we agree on using MongoDB, the localhost needs to have MongoDB installed and running. (Easy task)
  * Find a way to tackle the non-concrete data we found in the agreements. This may imply on sacrificing interaction in the page.