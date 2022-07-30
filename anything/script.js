const input = document.getElementById("input");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", (e) => {
  result.innerText = input.value;
  input.value = "";
});
