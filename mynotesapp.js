console.log("mynotes")




let addnote = document.getElementById("newnote")

addnote.addEventListener("click", addanote)
function addanote(){
    let addtext = document.getElementById("addtext")
    let cardnote = localStorage.getItem("cardnote")
    if (!cardnote) {
        cardnote = []
    } else {
        cardnote = JSON.parse(cardnote)
    }

    cardnote.push(addtext.value)
    localStorage.setItem("cardnote", JSON.stringify(cardnote))
    addtext.value = "";
    showmynote()

    let addtitle = document.getElementById("addtitle")
    let cardtitle = localStorage.getItem("cardtitle")
    if (!cardtitle) {
        cardtitle = []
    } else {
        cardtitle = JSON.parse(cardtitle)
    }

    cardtitle.push(addtitle.value)
    localStorage.setItem("cardtitle", JSON.stringify(cardtitle))
    addtitle.value = "";
    showmytitle()
} 


function showmynote() {
    let cardnote = localStorage.getItem("cardnote");
    if (!cardnote) {
        cardnote = []
    } else {
        cardnote = JSON.parse(cardnote)
    }
    let cardtitle = localStorage.getItem("cardtitle");
    if (!cardtitle) {
        cardtitle = []
    } else {
        cardtitle = JSON.parse(cardtitle)
    }
    let html = "";

    cardtitle,cardnote.forEach(function (element, cardtitle) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${cardtitle} </h5>
                            <p class="card-text">${element}</p>
                            <button id="${cardtitle}" onClick=deleteNotes(this.id) class="btn btn-primary">Delete Note</button>                                           
                            </div>
                    </div>`;
    });
    let displaycard1 = document.getElementById("displaycard1");
    if (cardtitle,cardnote.length != 0) {
        displaycard1.innerHTML = html;
    }
    else {
        displaycard1.innerHTML = `Nothing to show! use add notes`;
    }
}


// function showmytitle() {
    let cardtitle = localStorage.getItem("cardtitle");
    if (!cardtitle) {
        cardtitle = []
    } else {
        cardtitle = JSON.parse(cardtitle)
    }
//     let html = "";

//     cardtitle.forEach(function (dfdf, fgfg) {
//         html += `
//         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//                         <div class="card-body">
//                             <h5 class="card-title">${fgfg + 1} </h5>
//                             <p class="card-text">${dfdf}</p>
//                             <button id="${fgfg}" onClick=deleteNotes(this.id) class="btn btn-primary">Delete Note</button>                                           
//                             </div>
//                     </div>`;
//     });
//     if (cardtitle.length != 0) {
//         displaycard1.innerHTML = html;
//     }
//     else {
//         displaycard1.innerHTML = `Nothing to show! use add notes`;
//     }
// }
