const parent = document.getElementById("parentBox");
const colors = [
  "red",
  "navy",
  "gray",
  "indigo",
  "black",
  "green",
  "brown",
  "maroon",
  "lime",
  "gold",
  "orangered",
  "teal",
  "violet",
  "magenta",
  "blue",
];

function color() {
    index = Math.floor(Math.random() * 15);
    const parentColor = colors[index];
  parent.style.backgroundColor = parentColor;
}

function add() {
    const child = document.createElement("div");
    child.style.height = "20px";
    child.style.width = "20px";
    child.style.backgroundColor = "white";
    parent.appendChild(child);
}

function remove() {
    parent.removeChild(parent.lastChild)
}
