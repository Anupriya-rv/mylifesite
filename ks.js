function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function addItem(type) {
  const input = document.getElementById(type === "study" ? "studyInput" : "goalInput");
  const list = document.getElementById(type === "study" ? "studyList" : "goalsList");

  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  const del = document.createElement("button");
  del.textContent = "✖";
  del.onclick = () => {
    li.remove();
    saveData();
  };

  li.appendChild(del);
  list.appendChild(li);
  input.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("studyList", document.getElementById("studyList").innerHTML);
  localStorage.setItem("goalsList", document.getElementById("goalsList").innerHTML);
  localStorage.setItem("savedNotes", document.getElementById("savedNotes").innerHTML);
}

function loadData() {
  document.getElementById("studyList").innerHTML = localStorage.getItem("studyList") || "";
  document.getElementById("goalsList").innerHTML = localStorage.getItem("goalsList") || "";
  document.getElementById("savedNotes").innerHTML = localStorage.getItem("savedNotes") || "";
}

function saveNote() {
  const noteText = document.getElementById("noteText").value.trim();
  if (!noteText) return;
  const p = document.createElement("p");
  p.textContent = noteText;
  document.getElementById("savedNotes").prepend(p);
  document.getElementById("noteText").value = "";
  saveData();
}

window.onload = loadData;
