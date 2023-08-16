document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  depositField.value = "";

  const depositTotalEl = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalEl.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalEl.innerText = newDepositTotal;

  const balanceTotalEl = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalEl.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalEl.innerText = newBalanceTotal;
});
