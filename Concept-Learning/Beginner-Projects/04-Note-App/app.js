const noteForm = document.getElementById("note-form");
const noteIdInput = document.getElementById("note-id");
const noteTitleInput = document.getElementById("note-title");
const noteContentInput = document.getElementById("note-content");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");
const notesList = document.getElementById("notes-list");

let notes = JSON.parse(localStorage.getItem("simple_notes")) || [];

function renderNotes() {
  notesList.innerHTML = "";

  if (notes.length === 0) {
    notesList.innerHTML =
      '<p class="text-gray-400 text-center text-sm py-4">No notes saved yet.</p>';
    return;
  }

  notes.forEach((note) => {
    const noteDiv = document.createElement("div");
    noteDiv.className =
      "p-4 border rounded-md bg-gray-50 flex justify-between items-start";
    noteDiv.innerHTML = `
                    <div class="flex-1 min-w-0 pr-4">
                        <h3 class="font-bold text-gray-900 break-words">${escapeHTML(note.title)}</h3>
                        <p class="text-gray-600 text-sm mt-1 whitespace-pre-wrap break-words">${escapeHTML(note.content)}</p>
                    </div>
                    <div class="flex gap-2 shrink-0">
                        <button onclick="editNote('${note.id}')" class="text-blue-500 hover:text-blue-700 text-sm font-medium cursor-pointer">Edit</button>
                        <button onclick="deleteNote('${note.id}')" class="text-red-500 hover:text-red-700 text-sm font-medium cursor-pointer">Delete</button>
                    </div>
                `;
    notesList.appendChild(noteDiv);
  });
}

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = noteIdInput.value;
  const title = noteTitleInput.value.trim();
  const content = noteContentInput.value.trim();

  if (id) {
    notes = notes.map((note) =>
      note.id === id ? { id, title, content } : note,
    );
  } else {
    notes.unshift({ id: Date.now().toString(), title, content });
  }

  saveNotes();
  renderNotes();
  resetForm();
});

window.editNote = function (id) {
  const note = notes.find((n) => n.id === id);
  if (!note) return;

  noteIdInput.value = note.id;
  noteTitleInput.value = note.title;
  noteContentInput.value = note.content;

  saveBtn.textContent = "Update Note";
  cancelBtn.classList.remove("hidden");
  noteTitleInput.focus();
};

window.deleteNote = function (id) {
  if (confirm("Delete this note?")) {
    notes = notes.filter((note) => note.id !== id);
    saveNotes();
    renderNotes();
    if (noteIdInput.value === id) resetForm();
  }
};

cancelBtn.addEventListener("click", resetForm);

function resetForm() {
  noteForm.reset();
  noteIdInput.value = "";
  saveBtn.textContent = "Save Note";
  cancelBtn.classList.add("hidden");
}

function saveNotes() {
  localStorage.setItem("simple_notes", JSON.stringify(notes));
}

function escapeHTML(str) {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[tag] || tag,
  );
}

renderNotes();
