document.querySelector("#balance").value = 0;

var amt = document.querySelector("#amount");
var inc = document.querySelector("#income");
var exp = document.querySelector("#expense");
var bal = document.querySelector("#balance");
var txt = document.querySelector("#text");

var inc1 = 0;
var exp1 = 0;
function addTranscation() {
  if ((txt.value && amt.value) == "") {
    alert("please enter Text or amount");
  } else {
    history();
    if (amt.value >= 0) {
      var amt1 = parseFloat(amt.value);
      inc1 += amt1;
      inc.value = "$" + inc1;
    } else {
      var amt2 = parseFloat(amt.value);
      exp1 -= amt2;
      exp.value = "$" + exp1;
    }
  }
  txt.value = "";
  amt.value = "";
  checkBalance();
}

function checkBalance() {
  bal.value = `$${inc1 - exp1}`;
}

function history() {
  document.querySelectorAll(
    ".history"
  )[0].innerHTML += `<div class="his"><p>${txt.value}</p><p>${amt.value}</p></div>`;
}
