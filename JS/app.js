console.log('Welcome Vipul!!')

// If user adds a note, add it to the localStorage
let Addbtn = document.getElementById('Addbtn');
Addbtn.addEventListener("click",function(e){

let Addtxt = document.getElementById("Addtxt");
let notes = localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}
else{
    notesObj = JSON.parse(notes);
}
notesObj.push(Addtxt.value);
localStorage.setItem("notes", JSON.stringify(notesObj));
Addtxt.value="";
console.log(notesObj, localStorage.length);
showNotes();

})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
}
