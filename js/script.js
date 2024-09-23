// donate button event
document.getElementById('donate-js').addEventListener('click',function(event){
    ButtonEvent('donate-js', 'donation');
})
// history button event
document.getElementById('history-js').addEventListener('click',function(event){
    ButtonEvent('history-js','history');
})


// noakhali event
document.getElementById('noakhali-donate-js').addEventListener('click',function(event){
     // prevent reloding       
    event.preventDefault();
    // main blance update
    BlanceUpdate('main-blance-js' , 'noakhali-amount-js' , 'noakhali-donate-blance-js' , 'noakhali', 'popup')
})
// feni event
document.getElementById('feni-donate-js').addEventListener('click',function(event){
    // prevent reloding
    event.preventDefault();
    // main blance update
    BlanceUpdate('main-blance-js' , 'feni-amount-js' , 'feni-donate-blance-js' , 'feni', 'popup')
})

// aid event
document.getElementById('aid-donate-js').addEventListener('click',function(event){
    // prevent reloding
    event.preventDefault();
    // main blance update
    BlanceUpdate('main-blance-js' , 'aid-amount-js' , 'aid-donate-blance-js', 'aid', 'popup')
})

// pop down
document.getElementById('popdown').addEventListener('click',function(event){
    document.getElementById('popup').style.display= "none";
})

