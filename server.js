//dependencies
var express = require("express")
var path = require("path")
var fs = require("fs")
//express app set up
var app = express()
var PORT = 3000
//set up data parsing
var data = fs.readFileSync("db.json")
var notes1 = JSON.parse(data)
console.log(notes1)
app.use(express.urlencoded({extend: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())


//Routes
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "notes.html"))
})

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/api/notes", function(req, res){
    res.sendFile(path.join(__dirname, "db.json"))
})
app.post("/api/notes", function(req, res){
    var newNote = req.body
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase

    console.log(newNote)

    notes.push(newNote)

    res.json(newNote)

    var data = JSON.stringify(notes1)
    fs.writeFileSync("db.json", data)
})
//server listening
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})

