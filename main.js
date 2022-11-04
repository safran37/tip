const bill = document.querySelector("#bill");
const number = document.querySelector("#number");
const percent = document.querySelectorAll("[data-percent]");
let tipAmount = document.querySelector(".amount");
let totalAmount = document.querySelector(".total-amount");
const resetButton = document.querySelector(".reset");
const custom = document.querySelector("#custom");
let finalAmount = document.querySelector(".final");
const blank = document.querySelectorAll(".blank");
number.addEventListener("input", () => {
  if (bill.value !== "") {
    totalAmount.innerText = "$" + bill.value / number.value;
    finalAmount.innerText = "$" + bill.value;
    resetButton.classList.toggle("disabled");
  }
  console.log(number.value);
  if (number.value === "0") {
    blank[1].style.display = "block";
  }
  if (number.value > "0") {
    blank[1].style.display = "none";
  }
});
bill.addEventListener("input", () => {
  if (bill.value === "0") {
    blank[0].style.display = "block";
  }
  if (bill.value > "0") {
    blank[0].style.display = "none";
  }
});
percent.forEach((percentage) => {
  percentage.addEventListener("click", (event) => {
    for (let per of percent) {
      per.classList.remove("active");
    }
    percentage.classList.add("active");
    let tippy = percentage.innerText.match(/[\d\.]+/g);
    filter = tippy.filter((n) => n != ".");
    let findAmount = (parseInt(bill.value) * parseInt(filter)) / 100;
    tipAmount.innerText = "$" + findAmount;
  });
});
resetButton.addEventListener("click", () => {
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
  finalAmount.innerText = "$0.00";
  resetButton.classList.toggle("disabled");
  blank[0].style.display = "none";
  blank[1].style.display = "none";
  for (let per of percent) {
    per.classList.remove("active");
  }
});
custom.addEventListener("input", () => {
  for (let per of percent) {
    per.classList.remove("active");
  }
  tipAmount.innerText = (parseInt(bill.value) * parseInt(custom.value)) / 100;
});
