
window.addEventListener("load", (event) => {
    createGrid(16, 16)
    console.log("page is fully loaded");
})


const container = document.querySelector(".container");

function createGrid(x, y) {
    if(x > 100 || x == 0 || y > 100 || y == 0) {
        x = 16; y= 16;
        alert("No input over 100.")
    }


    container.innerHTML = "";
    const gridX = [];
    const gridY = [];

    gridX[0] = document.createElement("div");
    gridY[0] = document.createElement("div");
    container.appendChild(gridX[0]);

    function vh(percent) {
    var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    return (percent * h) / 100;
    }
    let width = vh(40) / x; //base width divided by x
    let height = vh(40) / y; //base height divided by y

    for (let i = 1; i <= y; i++) {
    gridX[i] = document.createElement("div");
    container.appendChild(gridX[i]);
    gridX[i].style.cssText =
        "display: flex; flex-direction: column; gap: 0px; width: auto; height: auto; align-items: center; justify-content: center;";
    }
    for (let j = 1; j <= y; j++)
    for (let i = 1; i <= x; i++) {
        gridY[i] = document.createElement("div");
        gridY[i].classList.add("square");
        gridX[j].appendChild(gridY[i]);
    }

    const gridSquare = document.querySelectorAll(".square");
    gridSquare.forEach((elem) => {
    // elem.textContent = "test"
    elem.style.cssText = `border: 1px solid grey; width: ${height}px; height: ${width}px;`; //width and height are confusing
    });

}

const button = document.querySelector(".button");
button.addEventListener("click", () => {
    x = parseInt(prompt("How many blocks in x-axis?"));
    y = parseInt(prompt("And how many blocks in y-axis?"));
    createGrid(x, y);
})
