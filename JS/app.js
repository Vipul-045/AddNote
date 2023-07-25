console.log('Welcome Vipul!!')
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {

    let Addtxt = document.getElementById("Addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(Addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    Addtxt.value = "";
    console.log(notesObj, localStorage.length);
    showNotes();

});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <button href="#" class="btn btn-primary" z-index=1> Delete Note</button>
                </div>
                </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`
    }

}
