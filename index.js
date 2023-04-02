console.log("This is the grocery Application");
const calcButtons = [
  "M",
  "C",
  "=",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "+",
  0,
  "-",
  "/",
  "X",
  "%",
];
const CalculatorApp = document.createElement("div");
Object.assign(CalculatorApp, {
  id: "calcBtn",
  style: {
    width: "30%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
// Create the display element
const display = document.createElement("div");
const topContainer = document.createElement("div");
const middleContainer = document.createElement("div");
const bottomContainer = document.createElement("div");
display.appendChild(topContainer);
display.appendChild(middleContainer);
display.appendChild(bottomContainer, {
  id: "display-bottom-container",
  style: {},
  innerText: inputDiv,
});
// add the display element to the root element
CalculatorApp.appendChild(
  Object.assign(display, {
    id: "display",
    style: {
      height: "100px",
      backgroundColor: "#808080",
    },
  })
);

for (let e of calcButtons) {
  const button = document.createElement("button");
  button.setAttribute("class", "btn");
  if (e === "p") {
    button.setAttribute("class", "last");
  }
  CalculatorApp.appendChild(
    Object.assign(button, {
      id: `${e}`,
      style: {
        width: 10.33,
      },
      innerText: `${e}`,
    })
  );
}
const app = document.getElementById("groceryApp");
app.appendChild(CalculatorApp);

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    display.innerHTML += event.target.id;
  });
});
addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    Calculate(1, 2, 3);
  }
  const validCode =
    event.code.startsWith("Digit") ||
    event.code === "Equal" ||
    event.code === "Minus";
  display.innerHTML = `${event.code} is ${validCode ? "valid" : "Invalid"}`;
});

const Calculate = (...args) => {
  alert(typeof args);
};
