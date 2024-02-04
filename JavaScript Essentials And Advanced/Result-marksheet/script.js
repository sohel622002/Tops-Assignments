const resultInputs = document.querySelectorAll("ul li input");

const resultButton = document.querySelector("#result-btn");

resultInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  });
});

function checkInsertedMarks() {
  let valid = true;
  let subjName = null;
  let emptyValue = false;

  for (let i = 0; i < resultInputs.length; i++) {
    const input = resultInputs[i];

    if (input.value === "") {
      valid = false;
      subjName = input.getAttribute("data-subj");
      emptyValue = true;
      break;
    } else if (input.value > 100) {
      valid = false;
      subjName = input.getAttribute("data-subj");
      console.log(subjName);
      break;
    }
  }

  return [valid, subjName, emptyValue];
}

resultButton.addEventListener("click", () => {
  let [validation, subjName, emptyValue] = checkInsertedMarks();
  if (!validation) {
    let errorContainer = document.querySelector(".error");
    if (emptyValue) {
      errorContainer.innerText = "Enter marks for " + subjName;
    } else {
      errorContainer.innerText =
        "Marks for " + subjName + " must be less than 100!";
    }
    document.querySelector(".error").style.display = "block";
    document.querySelector(`[data-subj="${subjName}"]`).focus();
    setTimeout(() => {
      document.querySelector(".error").style.display = "none";
    }, 3000);
    return;
  }
  document.querySelector("#total").innerText = calculateResult();
  document.querySelector("#percentage").innerText = calculatePercentage().toFixed(2);
});

function calculateResult() {
  let result = 0;
  resultInputs.forEach((input) => {
    result += Number(input.value);
  });
  return result;
}

function calculatePercentage() {
  const totalMarks = document.querySelector("#total").innerText;
  return (totalMarks * 100) / 700;
}
