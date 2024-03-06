let BTN = document.getElementById("start"),
  Input = document.getElementById('nameInput');

function say_hello(name) {
  return `Hello ${name}`;
}
BTN.addEventListener("click", function(e) {
  e.preventDefault();
  if (Input.value !== "") {
    let I = document.createElement("div");
    I.innerHTML=say_hello(Input.value);
    document.body.appendChild(I);
  }
  Input.value = '';
  Input.focus();
})
