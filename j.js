let button = document.querySelectorAll(".cell");
let input = document.getElementById("ecran");
input.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9+\-*/.]/g, "");
});
button.forEach((bt) => {
  bt.addEventListener("click", function () {
    const val = bt.textContent.trim();
    if (val === "=") {
      try {
        input.value = eval(input.value) || "0";
      } catch (error) {
        input.value = "";
      }
    } else if (val === "RESET") {
      input.value = ""; // Correction pour vider l'input
    } else if (val === "DEL") {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += val;
    }
  });
});

const themes = {
  theme1: {
    bodyBg: "hsl(223, 31%, 20%)",
    containerBg: "hsl(224, 36%, 15%)",
    cellClass: "them1",
    inputBg: "hsl(224, 36%, 15%)",
    inputColor: "",
    delClass: "del2",
    but1Class: "but02",
    but2Class: "bu02",
    bodyColor: "",
  },
  theme2: {
    bodyBg: "white",
    containerBg: "hsl(0, 5%, 81%)",
    cellClass: "them2",
    inputBg: "white",
    inputColor: "hsl(60, 10%, 19%)",
    delClass: "del1",
    but1Class: "but02",
    but2Class: "bu02",
    bodyColor: "black",
  },
  theme3: {
    bodyBg: "hsl(268, 75%, 9%)",
    containerBg: "hsl(268, 71%, 12%)",
    cellClass: "them3",
    inputBg: "hsl(268, 71%, 12%)",
    inputColor: "hsl(52, 100%, 62%)",
    delClass: "de",
    but1Class: "but",
    but2Class: "bu",
    bodyColor: "hsl(52, 100%, 62%)",
  },
};

let input1 = document.getElementById("switch");
let input2 = document.getElementById("switch1");
let input3 = document.getElementById("switch2");

let container = document.querySelector(".cellcontainer");
let cell = document.querySelectorAll(".cell");
let body = document.body;
let del = document.querySelector(".del");
let but1 = document.querySelector(".but1");
let but2 = document.querySelector(".but2");
let isoff = true;

function change(them) {
  if (isoff) {
    const t = themes[them];
    body.style.backgroundColor = t.bodyBg;
    body.style.color = t.bodyColor;
    container.style.backgroundColor = t.containerBg;
    input.style.backgroundColor = t.inputBg;
    input.style.color = t.inputColor;

    cell.forEach((cl) => {
      cl.className = t.cellClass;
    });
    del.className = t.delClass;
    but1.className = t.but1Class;
    but2.className = t.but2Class;
  } else {
    body.style.backgroundColor = "";
    body.style.color = "";
    container.style.backgroundColor = "";
    input.style.backgroundColor = "";
    input.style.color = "";
    cell.forEach((cl) => {
      cl.className = "cell";
    });
    del.className = "del";
    but1.className = "but1";
    but2.className = "but2";
  }
  isoff = !isoff;
}

input1.addEventListener("click", () => change("theme1"));
input2.addEventListener("click", () => change("theme2"));
input3.addEventListener("click", () => change("theme3"));
