const connectToMongo=require('./db')
const express = require('express')
var cors = require('cors')
const app = express()
const PORT =process.env.PORT || 5000
connectToMongo()
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
  res.send("welcome to my site")
})
app.use('/api/auth',require("./routes/auth"))  
app.use('/api/notes',require("./routes/notes"))
if(process.env.NODE_ENV=="production"){
  app.use(express.static("client/build"))
}
app.listen(PORT, () => {
  console.log(`iNotebook listening at http://localhost:${PORT}`)
})
