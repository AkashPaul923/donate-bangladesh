
// donation btn clicked function
function moneyDonateNow(id1 ,id2, id3){
    const inputBalance = parseFloat(document.getElementById(id1).value)
    const campBalance = parseFloat(document.getElementById(id2).innerText)
    const myBalance = parseFloat(document.getElementById('my-balance').innerText)

    // update balance
    const newCampBalance = campBalance + inputBalance
    document.getElementById(id2).innerText = newCampBalance

    const newMyBalance = myBalance - inputBalance
    document.getElementById('my-balance').innerText = newMyBalance
    // console.log(inputBalance,campBalance ,myBalance);

    // add history
    const campTitle = document.getElementById(id3).innerText
    const div = document.createElement('div')
    div.classList.add('p-8', 'border', 'rounded-2xl')
    div.innerHTML = `<h2 class= "font-bold text-xl"><span>${inputBalance}</span> Taka is <span>${campTitle}</span></h2>
    <p class = " font-light text-base text-gray-600 mt-4">Date : ${new Date()}</p>
    `
    const showHistory = document.getElementById('history-show')
    showHistory.appendChild( div )
    document.getElementById(id1).value = ''
}


// button change