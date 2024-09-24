
// donation btn clicked function
function moneyDonateNow(id1 ,id2, id3){
    const inputBalance = parseFloat(document.getElementById(id1).value)
    const campBalance = parseFloat(document.getElementById(id2).innerText)
    const myBalance = parseFloat(document.getElementById('my-balance').innerText)
    // input validation
    if(inputBalance <= 0 || isNaN(inputBalance)){
        return alert("Invalid donation amount")
    }
    if(myBalance < inputBalance){
        return alert('Insufficient Balance')
    }

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
    // show Modal
    my_modal_1.showModal()
    // input field empty
    document.getElementById(id1).value = ''
}
// utilities function
function focusedBtn(id){
    document.getElementById(id).classList.add('bg-btnPrimary')
    document.getElementById(id).classList.remove('text-gray-600')
}
function unfocusedBtn(id){
    document.getElementById(id).classList.remove('bg-btnPrimary')
    document.getElementById(id).classList.add('text-gray-600')
}

function hideElementById(id){
    document.getElementById('donation-show').classList.add('hidden')
    document.getElementById('history-show').classList.add('hidden')
    document.getElementById( id ).classList.remove('hidden')
}

// button change
document.getElementById('btn-history').addEventListener('click', function(){
    focusedBtn('btn-history')
    unfocusedBtn('btn-donation')
    hideElementById('history-show')
})
document.getElementById('btn-donation').addEventListener('click', function(){
    focusedBtn('btn-donation')
    unfocusedBtn('btn-history')
    hideElementById('donation-show')
})



// blog btn clicked
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html'
})

