const FileSystem = require('fs')
const getNotes = function(){
    return "here is my notes"
}

const addNote= function (title, body,tail){
    const notes=loadnotes()
    const duplicateNoteContents = notes.filter(function(note){
        return note.title === title
    })
    console.log(duplicateNoteContents)
    if(duplicateNoteContents.length===0){
        notes.push({
            title: title,
            body: body,
            tail: tail
        })
    }
   
    console.log(notes)
    saveNotes(notes)
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    FileSystem.writeFileSync('notes.json', dataJSON)
}

const loadnotes =function(){
    try{
    const dataBuffer = FileSystem.readFileSync('notes.json')
    const dataJSONNOTES= dataBuffer.toString()
    return JSON.parse(dataJSONNOTES)
    }catch(e){
        return []
    }
}

const removeNotes = function()

module.exports =
{ 
    getNotes, getNotes,
    addNote: addNote
} 