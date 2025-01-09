const submitText = function() {
  const inputValue = document.querySelector("#myInput").value;
  document.querySelector('#box').innerHTML += `<div class="inside">${inputValue}</div>`;
  document.querySelector("#myInput").value = '';
}

const keyboardInput = function(event){
  if(event.keyCode == 13) {
    submitText();
  }
}
const clearBox = function() {
  document.querySelector('#box').innerHTML = '';
}
const deleteLast = function(deleteLast)
