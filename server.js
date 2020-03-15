var express = require("express")
var path = require("path")
var fs = require("fs")

var app = express()
var PORT = 3000


app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get("/notes", function(req, res){
    res.sendFile(path.join(_dirname, "notes.html"))
})

app.get("*", function(req,res){
    res.sendFile(path.join(_dirname, "index.html"))
})

app.get("/api/notes", function(req, res){
    res.sendFile(path.join(_dirname, "db.json"))
})
app.post("/api/notes", function(req, res){
    var newNote = req.body
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase

    console.log(newNote)

    notes.push(newNote)

    res.json(newNote)
})

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})

