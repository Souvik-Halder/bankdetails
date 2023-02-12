const app=require('./app');
const port=4000;
const dotenv=require('dotenv');

//Config 
dotenv.config({path:__dirname+"/config/config.env"});

//connection to the data base
const connectDataBase=require('./config/dataBase')
connectDataBase()



//Handling Uncaught Exception
process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server");
    process.exit(1)
  })
  
  
  app.listen(port,(err)=>{
    
     console.log(`Server is running at the port ${process.env.PORT||port}`)
  })
  
  //unhandled promise rejection
  
  process.on("unhandledRejection", (err) => {
     console.log(`Error: ${err.message}`);
     console.log(`Shutting down the server due to Unhandled Promise Rejection`);
   
     process.exit(1)
   });
