# Better Doctor API Search
##### by James Osborn

### Description
Did you cut yourself while sheathing your samurai sword and now you're bleeding all over the place? Find a doctor that provides the services you need! With this app, you are be able to:   

*-Enter a name to get a list of doctors matching that name,  
-Enter a symptom to get a list of doctors that can treat that symptom,  
-Return an appropriate message if there are no matches for the search results,  
-Return an appropriate message if there is an error*

### Installation Instructions
* git clone to Desktop
* Open with a Text Editor
* In the console, type `npm install` and wait for it to complete
* type `bower install` and wait for it to complete
* type `gulp serve`

### Technology Needed
* Node.js
* Bower
* Text Editor (Atom recommended)
* Working browser with internet connection

### Known Bugs
* Sometimes the app will return multiple entries of the same address, phone, and accepting status.

### Contact Me
You can contact the developer at jamescarlosborn@gmail.com.

### License
This is licensed under the MIT license

Copyright (c) 2017 James Osborn All Rights Reserved.

### Specs

##### Description: The user will be able to enter a doctor's name to receiver: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.  
Input: `James Wang`  
Output: `First name: James, Last name: Wang, address: 111 Main St., Website: www.rickyhenderson.com, Accepting new patients: No.`  

##### Description: The user will be able to enter a medical issue to get a list of doctors that can treat that issue.  
Input: `pain`  
Output: `Dr. Doom, Dr. Evil, Dr. No`  

##### Description: The user will be see an error message if there's a problem with their query.  
Input: `sore throat`  
Output: `Error Message: Something went horribly wrong`  

##### Description: If the query doesn't include any doctors, the application returns a notification that states that no doctors meet the criteria.  
Input: `Search for Bobby Henderson`  
Output: `No Doctors meet that criteria`  

##### Description: If the query results in an error, it informs the user.  
Input: `Search for Bobby Henderson`  
Output: `There was an error with your search. Please try again, or try again later.`

:shipit:  
