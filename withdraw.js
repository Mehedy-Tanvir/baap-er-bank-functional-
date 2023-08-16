document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  withdrawField.value = "";

  const withdrawTotalEl = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalEl.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalEl.innerText = newWithdrawTotal;

  const balanceTotalEl = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalEl.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalEl.innerText = newBalanceTotal;
});
