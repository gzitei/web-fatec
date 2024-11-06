const body = document.querySelector("body");

const calculadora = document.createElement("section");
calculadora.setAttribute("id", "calculadora");

const display = document.createElement("section");
display.className = "display";
calculadora.appendChild(display);

const buttons = document.createElement("section");
buttons.className = "buttons";

const layout = [
  ["C", "(", ")", "+"],
  ["7", "8", "9", "-"],
  ["4", "5", "6", "/"],
  ["1", "2", "3", "*"],
  ["0", ".", "del", "="],
];

layout.flat().forEach((content, idx) => {
  const button = document.createElement("div");
  button.className = (idx + 1) % 4 === 0 ? "item op" : "item";
  button.id = content;
  button.textContent = content;
  button.style.filter = "brightness(80%)";
  buttons.appendChild(button);
});

calculadora.appendChild(buttons);

body.appendChild(calculadora);

const clear = document.querySelector("#C");
clear.addEventListener("click", () => {
  display.textContent = "";
});

const evalExpression = document.querySelector("[id='=']");
evalExpression.addEventListener("click", () => {
  try {
    const final = eval(display.textContent);
    display.textContent = final;
  } catch (error) {
    console.log(error);
    display.textContent = "ERROR!";
  }
});

const del = document.querySelector("#del");
del.addEventListener("click", () => {
  const txt = display.textContent;
  if (txt == "ERROR!") {
    display.textContent = "";
  } else {
    display.textContent = txt.substring(0, txt.length - 1);
  }
});

calculadora.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.className.includes("item")) {
    return;
  }
  const ignoreList = [clear, evalExpression, del].map((element) => element.id);
  if (ignoreList.includes(target.id)) {
    return;
  }
  display.textContent += target.textContent;
});

const items = document.querySelectorAll(".item");

items.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    const target = event.target;
    target.style.filter = "brightness(100%)";
  });

  button.addEventListener("mouseout", (event) => {
    const target = event.target;
    target.style.filter = "brightness(80%)";
  });
});
