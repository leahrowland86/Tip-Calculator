function calculateTip() {
  var billAmount = document.getElementById("billamount").value;
  var tipPercentage = document.getElementById("tippercentage").value;

  var total = (billAmount * tipPercentage);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("calculate").onclick = function() {
  calculateTip();
};
