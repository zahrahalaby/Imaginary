
**Imaginary**

imaginary it's an image and tag app that allows the user to creat tags and assign them with images 

![image](https://user-images.githubusercontent.com/97873892/172257259-f7011d1d-012b-4a47-8eb4-4ebae211b2d5.png)

-create a tag and choose it color

-update the tag 

-delete tag

-get random images 

-add image to tag  

-show tags and their images  

-delete image from the tag 

**to start imaginary**

 frontend-
 1.npm i
 2.npm i react
 3.npm start

 backend-
 1.npm i
 2.nodemon app.js


 

**assumption**
 I assume that i have one user with id=1 witch allows me to access all the data that i need like the tags for that spesefic user forward i can add a log in poseblity and by that i can presnt the data for that spicific user,and that my tag input allows only letters and numbers 


 **tests**
 so if my input inclouds any symbols the input color will turn into red and i will have massage 'inputs can only inclouds numbers and letters' show and so even if the user press the 'Add Tag' button it will not be add nor disblay the tag as will as if i have a log in page i will check if my user have already the same title Tag and if it dose i will point out that by alert
 forward i will check my user informasion if the password would be safe not common and user name are correct then the user will have prermission
 
 **technologies**
 cors-: cross-origin resource sharing ,my app client and server side hosted on different domains.
 Therefore, my client that's requesting data from my server might have different origins, and CORS enables me to access a resource from a different origin.
 express-:Express is an open-source server-side framework built for Node. js.
Express provides plugins, template code, middleware packages, and routing functionality for faster and efficient web development

 Express is a flexible Node.js web application framework that provides a  set of features for web and mobile applications ,it allwed me to creat a robust API is quick and easy and Many popular frameworks are based on Express like cors.

 Express enables connection with the frontend through a minimalistic approach

 mssql-:Microsoft Structured Query Language in my project i chose to use sql server database it best fited my project because of its structure that is primarily built around a row-based table structure that connects related data elements in different tables to one another, avoiding the need to redundantly store data in multiple places within a database.
 and mssql is a language that helps me communicate with my database.
 react-: React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.
 axios-: axios is a directory that allows us to execute HTTP requests get, post, put and delete using promises.








