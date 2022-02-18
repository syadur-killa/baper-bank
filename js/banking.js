// Function for Collcect Data from input and Button 
function inputValue(inputID) {
    const inputValue = document.getElementById(inputID);
    const newAmountTxt = inputValue.value;
    const newAmount = parseFloat(newAmountTxt);
    inputValue.value = '';
    return newAmount;
}

function updatetotalField( totalAmount, totalValue) {
    const valueTotal = document.getElementById(totalValue);
    const previousText = valueTotal.innerText;
    const previousAmount = parseFloat(previousText);
    valueTotal.innerText = previousAmount + totalAmount;
}


function updateBalance(totalAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true){
        balanceTotal.innerText = previousBalanceTotal+totalAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - totalAmount;
    }
}


// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = inputValue('deposit-input')
    updatetotalField(depositAmount, 'deposit-total');
    updateBalance(depositAmount, true);

    // update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // depositTotal.innerText = previousDepositAmount + depositAmount;

    

    // update account balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + depositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    
    
    // clear the deposit input field

    
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount =  inputValue('withdraw-input')
    updatetotalField(newWithdrawAmount, 'withdraw-total');
    updateBalance(newWithdrawAmount, false);
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);
   

    // set withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;

    

    // clear withdraw input
    
})