let billInput = document.querySelector("#billamount");
let tipInput = document.querySelector("#tippercentage");
// let button = document.querySelector("#calculate");

function calculateTip() {
  var billAmount = Number(document.getElementById("billamount").value);
  var tipPercentage = Number(document.getElementById("tippercentage").value);

  var textBox = Number(document.getElementById("billamount").value);

  var total = (billAmount * tipPercentage);

  var totalBill = (total + billAmount);

  document.getElementById("tip").innerHTML = "$" + total + " = ";

  document.getElementById("bill").innerText = "$" + billAmount  + " + ";

  document.getElementById("totalDue").innerText = "$" + totalBill;
};

// function verifyTip() {
//   if (tipPercentage == 0)
//   {
//     document.getElementById("otherTipAmount").innerHTML = "$" + totalOther + " = ";
//   } else {
//   document.getElementById("tip").innerHTML = "$" + total + " = ";
// }
// };

// button.addEventListener('click', function() {
//   calculateTip();
// });

billInput.addEventListener('input', function() {
  calculateTip();
});
tipInput.addEventListener('input', function() {
  calculateTip();
});
