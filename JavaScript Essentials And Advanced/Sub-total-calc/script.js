const productInputs = document.querySelectorAll(".num-input");

productInputs.forEach((inp) => {
  inp.addEventListener("input", handleInputChange);
});

document.querySelectorAll(".remove-btn").forEach((btn) => {
  btn.addEventListener("click", handlerRemoveButton);
});

function handlerRemoveButton(e) {
  const target = e.target.closest(".product-row");
  target.remove();
  calculateTotalPrice();
}

function handleInputChange(e) {
  let target = e.target;
  const parent = target.closest(".product-row");
  const perQuPrice = parent.querySelector(".per-q-price").innerText;
  const price = parent.querySelector(".price");
  console.log(target.value, perQuPrice);
  price.innerText = (parseInt(target.value) * Number(perQuPrice)).toFixed(2);

  calculateTotalPrice();
}

function calculateTotalPrice() {
  let result = 0;
  const prices = document.querySelectorAll(".price");
  prices.forEach((pr) => {
    result += Number(pr.innerText);
  });
  document.querySelector(".total").innerText = result;
}
