// Function for Collcect Data from input and Button 
function inputValue(inputID) {
    const inputValue = document.getElementById(inputID);
    const newAmountTxt = inputValue.value;
    const newAmount = parseFloat(newAmountTxt);
    inputValue.value = '';
    return newAmount;
}

function updatetotalField( depositAmount, totalValue) {
    const depositTotal = document.getElementById(totalValue);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    depositTotal.innerText = previousDepositAmount + depositAmount;
}


// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = inputValue('deposit-input')

    // update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // depositTotal.innerText = previousDepositAmount + depositAmount;

    updatetotalField(depositAmount, 'deposit-total');

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    const newWithdrawAmount =  inputValue('withdraw-input')

    // set withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    updatetotalField(newWithdrawAmount, 'withdraw-total');

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    
})