const addNote = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addnewNote(note));
}

addNote.addEventListener("click", () => addnewNote(""));

// create new note
function addnewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
     </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="textarea ${text ? "hidden" : ""}"></textarea>
    `;

  // create editbutton & deletebutton
  const editButton = note.querySelector(".edit");
  const deleteButton = note.querySelector(".delete");
  // create main & text area
  const main = note.querySelector(".main");
  const textArea = note.querySelector(".textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  // delete note

  deleteButton.addEventListener("click", () => {
    note.remove();
    updateLocalStorage();
  });

  // edit note

  editButton.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);

    updateLocalStorage();
    removeLocalStorage();
  });

  document.body.appendChild(note);
}

// add localstorage

function updateLocalStorage() {
  const notesText = document.querySelectorAll(".textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}
