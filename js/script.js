// noakhali event
document.getElementById('noakhali-donate-js').addEventListener('click',function(event){
     // prevent reloding       
    event.preventDefault();
    // main blance update
    BlanceUpdate('main-blance-js' , 'noakhali-amount-js' , 'noakhali-donate-blance-js' , 'noakhali')
})
// feni event
document.getElementById('feni-donate-js').addEventListener('click',function(event){
    // prevent reloding
    event.preventDefault();
    // main blance update
    BlanceUpdate('main-blance-js' , 'feni-amount-js' , 'feni-donate-blance-js' , 'feni')
})

// aid event
document.getElementById('aid-donate-js').addEventListener('click',function(event){
    // prevent reloding
    event.preventDefault();
    // main blance update
    BlanceUpdate('main-blance-js' , 'aid-amount-js' , 'aid-donate-blance-js', 'aid')
})
