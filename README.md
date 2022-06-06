
**Imaginary**

imaginary it's an image and tag app that allows the user to creat tags and assign them with images 

![image](https://user-images.githubusercontent.com/97873892/172257259-f7011d1d-012b-4a47-8eb4-4ebae211b2d5.png)
![image](https://user-images.githubusercontent.com/97873892/172258184-59d47d5b-e792-4c4d-b5e2-24c0a68987f7.png)

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
 2.npm start

 backend-
 1.npm i
 2.nodemon app.js

I assumed that I already logged in with user id=1 witch takes me to my page there I can access all the data that I need, I will be presented an array of images that I can tag by clicking on the icon in the bottom the tag that will be presented are tags that we made on the input middle of the page there we can give the tag a title and a color witch we will see under the input we can update and delete those tags by pressing on the icons and last in the bottom we can se all the tags that we mad and the images assigned to them


 **tests**
 need to check if tag input is not empty and if it does not include samples and if image exist in another tag
 forward I will check my user information if the password would be safe and not common and user name are correct then the user will have permission 
 
 **technologies**
 cors-: cross-origin resource sharing, my app client and server side hosted on different domains.
 Therefore, CORS enables me to access a resource from a different origin.
 express-: Express is a flexible Node.js web application framework that provides a set of features for web and mobile applications, it allowed me to create a robust API is quick and easy and many popular frameworks are based on Express like cors. Express enables connection with the frontend through a minimalistic approach
 mssql-: Microsoft Structured Query Language in my project i chose to use sql server database it best fitted my project because of its structure that is primarily built around a row-based table structure that connects related data elements in different tables to one another, avoiding the need to redundantly store data in multiple places within a database.
 and mssql is a language that helps me communicate with my database.
 axios-: axios is a directory that allows us to execute HTTP requests get, post, put and delete using promises.



**sql Server Structure**

table1 - Images    columns - id ,url , userID

table2 - tagImage  columns - tagID ,imageID

table3 - Tags            columns – id ,title ,userID ,color

table4 - Users          columns – id ,name 




