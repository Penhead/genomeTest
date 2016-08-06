# genomeTest

###Project Setup
Make you you have node and npm install on your computer.
Then run commands npm start
The project will now be running on locahost:7777

###Project Notes
####Api
I want to walk through my thought process when starting this project.  
I first saw that I needed an api of some sort that wasn't provided. So I created my own using expressjs. You can find my server.js  
file in config/server.js.  
I saw that I need two query types for the api. So I have the api looking for ?query= and ?category=  
I have a very simple algorithm running to parse the strings and bring back results that match what in the "database"  
The database is a json file with dummy data in it so its not connect to a real database.  

####Angular
I tried to keep things simple and modular. The project is broken down by controllers, views, and assets.  
I'm using ui-router to handle my routing for pages just incase it needs to scale up.  
I'm using the $http service to handle my api request. Most time I actually create a service that handles all api calls but this is a simple implementation.  

####Styles
The styles are being produced by Sass and gulp is compiling it.  
You can run the compile by typing gulp styles in the terminal.  
I used Foundations 6 as my styling framework, however I'm also comfortable with bootstrap.  
Just to add some personality I used animate.css so the results show up in style.  

####Other Thoughts
For the sort I didn't know exactly how you wanted it to behave so I decided on using checkboxes for the filtering of the "Gluten Free" and "isVegan" options.
So the behavior is if "isVegan" is only checked only vegan options will show. If "Gluten Free" is checked only gluten free options will show. However if "isVegan" and "Gluten Free" is checked any item with either of those values as true will show and exclude items where both are false.  
Fun Project!
