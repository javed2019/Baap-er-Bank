document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmt = document.getElementById('user-deposit').value;

    const balAmt = document.getElementById('balance').innerText;

    const existingDepositField = document.getElementById('depBalance').innerText;

    if(depositAmt>=0){
        document.getElementById('depBalance').innerText = parseInt(depositAmt) + parseInt(existingDepositField);
        
        document.getElementById('balance').innerText = parseInt(depositAmt) + parseInt(balAmt);

        document.getElementById('user-deposit').value=''
    }
    else{
        alert("Please type a valid deposit amount.")
    }
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmt = document.getElementById('user-withdraw').value;
    withdrawAmtNumber = parseInt(withdrawAmt)
    
    const balAmt = document.getElementById('balance').innerText;
    balAmtNumber = parseInt(balAmt)
    
    const existingWithdrawField = document.getElementById('withdrawBalance').innerText;

    if(withdrawAmt>=0 && balAmtNumber>=withdrawAmtNumber){
        document.getElementById('withdrawBalance').innerText = parseInt(withdrawAmt) + parseInt(existingWithdrawField);
        
        document.getElementById('balance').innerText = balAmtNumber - withdrawAmtNumber;

        document.getElementById('user-withdraw').value=''
    }
    else{
        alert("Please type a valid deposit amount.")
    }
})

function logout(){
    window.location='./index.html';
}