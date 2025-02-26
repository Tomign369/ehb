document.querySelectorAll(".grid-item").forEach((item) => {
  item.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
    updateCounts();
  });
  item.addEventListener("click", function () {
    this.style.backgroundColor = "Blue";
    updateCounts();
  });
  item.addEventListener("dblclick", function () {
    this.style.backgroundColor = "green";
    updateCounts();
  });
});

function updateCounts() {
  let redCount = 0,
    blueCount = 0,
    greenCount = 0;

  document.querySelectorAll(".grid-item").forEach((item) => {
    if (item.style.backgroundColor === "red") redCount++;
    if (item.style.backgroundColor === "blue") blueCount++;
    if (item.style.backgroundColor === "green") greenCount++;
  });

  document.getElementById("redCount").textContent = redCount;
  document.getElementById("blueCount").textContent = blueCount;
  document.getElementById("GreenCount").textContent = greenCount;
}
