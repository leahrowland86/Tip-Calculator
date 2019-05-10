function billAmount() {
//associate the bill amount entered by the user with billAmount variable
  let billAmount = Number(document.getElementById("billamount").value);

//print entered bill amount with a dollar sign underneath the input box
  document.getElementById("bill").innerHTML = "$" + billAmount + " + ";

  return billAmount;
};

function tipAmount() {
  let billAmount = Number(document.getElementById("billamount").value);
  let tipPercent = Number(document.getElementById("tippercentage").value);
  let tipAmount = (billAmount * tipPercent);

  document.getElementById("tip").innerHTML = "$" + tipAmount + " = ";

  return tipAmount;
};

function totalAmount() {
  let billAmount = Number(document.getElementById("billamount").value);
  let tipPercent = Number(document.getElementById("tippercentage").value);
  let tipAmount = (billAmount * tipPercent);
  let totalCalcAmount = (billAmount + tipAmount);

  document.getElementById("total").innerHTML = "$" + totalCalcAmount;

  return totalCalcAmount;
};


//listen for the user's bill amount and output it automatically and CALLS the function
let billInput = document.querySelector("#billamount");
let totalInput = document.querySelector("#total");
billInput.addEventListener('input', function() {
  billAmount();
  totalAmount();
  tipAmount();
});

let tipInput = document.querySelector("#tippercentage");
tipInput.addEventListener('input', function() {
  tipAmount();
  billAmount();
  totalAmount();
});
