
// donation btn clicked function
function moneyDonateNow(id1 ,id2){
    const inputBalance = parseFloat(document.getElementById(id1).value)
    const campBalance = parseFloat(document.getElementById(id2).innerText)
    const myBalance = parseFloat(document.getElementById('my-balance').innerText)
    console.log(inputBalance,campBalance ,myBalance);
}