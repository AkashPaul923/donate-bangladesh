
// donation btn clicked function
function moneyDonateNow(id1 ,id2){
    const inputBalance = parseFloat(document.getElementById(id1).value)
    const campBalance = parseFloat(document.getElementById(id2).innerText)
    const myBalance = parseFloat(document.getElementById('my-balance').innerText)

    // update balance
    const newCampBalance = campBalance + inputBalance
    document.getElementById(id2).innerText = newCampBalance

    const newMyBalance = myBalance - inputBalance
    document.getElementById('my-balance').innerText = newMyBalance
    console.log(inputBalance,campBalance ,myBalance);
}