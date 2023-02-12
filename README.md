# bankdetails
#Technical Stacks I Used-
 1.Express Js
 2.Node JS
 3.MongoDB
 4.React Js(For Frotnend)

# Steps I followed to solve the problem Statement
  1. I uploaded the given data on MongoDB database from .csv file of given repo.
  2. I created the two apis from the data of the database by using Express Js
  3. I followed some Test cases and I also handled the code by creating a error middleware.So,that errors can't stop the server at any cost.
  4. I used controllers,routes,middlewares,config folder to develope a clean code for the problem statement.
  5. The api sends the data in json format . I also add some feature like pagination(The api will display 10 datas per page) and searching(you can find your bank branch details by using the ifsc code of the bank) on the api so that it is easy to manage the large amount of data.

# Steps need to follow to run the app 
  1. clone the app in your local by using `https://github.com/Souvik-Halder/bankdetails.git` or downloading the zip file from this github repo.
  2. now go to the bankdetails folder and run the command `npm i` and `npm run dev`.
  3. now you need to set the DB_URI in the config.env file .create the config.env file on the config folder.
  4. Put the DB_URI in config.env file
  5. Now you can see your data in the below urls

# Data
  # All Bank Details 
   1. To get the all bank details go to the api `http://localhost:4000/api/v1/getBankDetails`
   2. To  search the bank details from the ifsc code of the bank `http://localhost:4000/api/v1/getBankDetails?keyword=SBIN0013694`
   3. To get the the data of page 10 `http://localhost:4000/api/v1/getBankDetails?page=10`
   3. To get the details of the specific bank id `http://localhost:4000/api/v1/getBankDetails/60`
   4. To get the the data of page 10 of specific bank id `http://localhost:4000/api/v1/getBankDetails/60?page=10`
  
