# E-Commerce Back End 
  ## table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description 
  This API works as a back end for an online social network. Using mongodb for storage, routes were created to add users, thoughts, and reactions to thoughts. Users can add other users to their friend list which is saved as friends data. Thoughts and reactions are associated with a unique user ID. Through the routes, edits can be made to any of the features as well.
  [link to walkthrough video](https://youtu.be/gEpWh8oYOyY)) 

  ## Installation 
  Installation starts with downloading the zip file containing all of the files and extracting everything within. Next, the folder should be opened within visual studio code or a functional equivalent and through the command terminal, "npm init" should be entered, followed by "npm i" to install all of the necessary packages. From there, the server should be started using the command "node server.js". Next using the loacal server address in insomnia, use any of the commands within the route files to test out if data is being added, deleted, modified, and viewed using the correspoding requests. 

  ## Usage 
  Once the application is fully set up, make sure the server is running as described within the installation instructions and use Insomnia to access the data however you see fit. Within Insomnia, any command that needs to identify a target user/thought/reaction within the database uses the id of the given user/thought/reaction to address which one should be affected by the request. For adding new data, entering the body in json form is suggested and the model files can be used to give an idea on the notation for each table.

  ## License 
  the unlicense :
  A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.

  ## Contribution 
  Sam Bergeland

  ## Tests 
  Once set up, use any of the requests within Insomnia

  ## Questions 
  Find me at Github under [samb56](https://github.com/samb56)

  contact me at:
  [sambergeland@gmail.com](mailto:sambergeland@gmail.com)
