const express=require ('express');
const connectDB=require('./config/db');
const app=express();
//connect Database
connectDB();

app.get('/',(req,res)=>res.send('API running'))

// init middleware 
app.use(express.json({extended:false}))
//define routes 
app.use('/api/users', require('./routes/API/Users'))
app.use('/api/auth', require('./routes/API/Auth'))
app.use('/api/profile', require('./routes/API/Profile'))
app.use('/api/posts', require('./routes/API/Posts'))
const PORT =process.env.POPRT || 5000;
app.listen(PORT, err =>
    err ? console.error(err) : console.log(`🚀 is 🏃 on port ${PORT} `)
  );