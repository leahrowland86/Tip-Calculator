let billInput = document.querySelector("#billamount");
let tipInput = document.querySelector("#tippercentage");
let otherTipInput = document.querySelector("#othertipamount");
// let button = document.querySelector("#calculate");

function calculateTip() {
  // debugger;
  var billAmount = Number(document.getElementById("billamount").value);
  var tipPercentage = Number(document.getElementById("tippercentage").value);

      var otherTipAmount = Number(document.getElementById("othertipamount").value);

  var textBox = Number(document.getElementById("billamount").value);

  var total = (billAmount * tipPercentage);

        var otherTotal = (otherTipAmount / 100) * billAmount;

  var totalBill = (total + billAmount);

        var otherTotalBill = (otherTotal + billAmount);

  document.getElementById("bill").innerText = "$" + billAmount  + " + ";

  document.getElementById("tip").innerHTML = "$" + total + " = ";

        document.getElementById("tipother").innerHTML = "$" + otherTotal + " = ";

  document.getElementById("totalDue").innerText = "$" + totalBill;

        document.getElementById("otherTotalDue").innerText = "$" + otherTotalBill;
};

billInput.addEventListener('input', function() {
  calculateTip();
});
tipInput.addEventListener('input', function() {
  calculateTip();
});
otherTipInput.addEventListener('input', function() {
  calculateTip();
});
