console.log("hello")
showNotes();

let addBtn = document.getElementById("add_Notes")
addBtn.addEventListener("click", addMyNotes)

function addMyNotes() {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (!notes) {
        notes = []
    } else {
        notes = JSON.parse(notes)
    }
    notes.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notes))
    addTxt.value = "";
    showNotes()
}
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (!notes) {
        notes = []
    } else {
        notes = JSON.parse(notes)
    }
    let html = "";
    notes.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Note ${index + 1} </h5>
                            <p class="card-text">${element}</p>
                            <button id="${index}" onClick=deleteNotes(this.id) class="btn btn-primary">Delete Note</button>                                           
                            </div>
                    </div>`;
    });
    let showCard = document.getElementById("showCard");
    if (notes.length != 0) {
        showCard.innerHTML = html;
    }
    else {
        showCard.innerHTML = `Nothing to show! use add notes`;
    }
}
function deleteNotes(index) {
    console.log(index)
    let notes = localStorage.getItem("notes");
    if (!notes) {
        notes = []
    } else {
        notes = JSON.parse(notes)
    }
    notes.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notes))
    showNotes();
}

