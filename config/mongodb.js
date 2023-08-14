const mongoose=require('mongoose');

const url = "mongodb+srv://radadiyab022:bhavin123@cluster0.asddn8b.mongodb.net/";

const db={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,db)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

module.exports=db;