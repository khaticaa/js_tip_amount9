const calculate = document.getElementById("calculate");
calculate.addEventListener("click", function () {
  let billAmount = parseFloat(document.getElementById("bill-amount").value);
  let numberOfPeople = parseInt(
    document.getElementById("number-of-people").value
  );

  let tipPercentage;
  let tipInputs = document.getElementsByName("tip");
  for (let i = 0; i < tipInputs.length; i++) {
    if (tipInputs[i].checked) {
      tipPercentage = parseFloat(tipInputs[i].value) / 100;
    }
  }

  let tipAmount = billAmount * tipPercentage;
  let totalPerPerson = (billAmount + tipAmount) / numberOfPeople;

  document.getElementById("tip-amount").innerText = tipAmount.toFixed(2);
  document.getElementById("total-per-person").innerText =
    totalPerPerson.toFixed(2);
});
