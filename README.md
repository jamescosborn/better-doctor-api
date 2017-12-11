# Doctor Lookup
##### by James Osborn

### Description
This app will allow a user to find a doctor that provides the services they need. A user will be able to enter a medical issue to receive a list of doctors, enter the name of a doctor to receive a list of doctors matching that name, and see a variety of information about the doctor. Additionally, if their is an error in their search, the application will return a notification of what error that is. If the search doesn't return any doctors, a notification will alert the user than no doctors meet the criteria.

### Installation Instructions
* Clone to Desktop
* Open it with a Text Editor
* Type `npm install` and wait for it to complete
* type `bower install` and wait for it to complete
* type `gulp serve`

### Technology Needed
* Node.js
* Bower
* Code Text Editor
* Working browser with internet connection

### Known Bugs
* No known bugs at this time.

### Contact Me
You can contact the developer at jamescarlosborn@gmail.com.

### License
This is licensed under the MIT license

Copyright (c) 2017 James Osborn All Rights Reserved.

_If you find a way to monetize this please contact the author_

### Specs

##### Description: The user will be able to enter a doctor's name to receiver: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.  
Input: `Ricky Henderson`  
Output: `First name: Ricky, Last name: Henderson, address: 111 Main St., Website: www.rickyhenderson.com, Accepting new patients: No.`  

##### Description: The user will be able to enter a medical issue to get a list of doctors that can treat that issue.  
Input: `soar throat`  
Output: `Ricky Henderson, Laura Palmer`  

##### Description: The user will be see an error message if there's a problem with their query.  
Input: `sore throat`  
Output: `Error Message: Something went horribly wrong`  

##### Description: If the query doesn't include any doctors, the application returns a notification that states that no doctors meet the criteria.  
Input: `Search for Bobby Henderson`  
Output: `No Doctors meet that criteria`  
