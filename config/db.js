const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sanjeevms28122:358251999191MS@cluster0.kwpz8.mongodb.net/DatabaseCa").then(()=> console.log("conneted to database")).catch(err=> console.error("Connection failed",err))


module.exports=mongoose;