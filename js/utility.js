//  blance update function
function BlanceUpdate(mainblance , amount , donate , reason, pop){
    // condition for positive number
    if( ((document.getElementById(amount).value))> 0){
        // main blance update
        document.getElementById(mainblance).innerHTML = parseFloat(document.getElementById(mainblance).innerHTML) - parseFloat(document.getElementById(amount).value);
        // donate blance update
        document.getElementById(donate).innerHTML = parseFloat(document.getElementById(donate).innerHTML) + parseFloat(document.getElementById(amount).value);
        // pop show
        document.getElementById(pop).style.display ="flex";  
        // create div, h3, p element
        const div = document.createElement('div');
        const h3  = document.createElement('h3');
        const p  = document.createElement('p');
        // add inner text
        h3.innerText = parseFloat(document.getElementById(amount).value) + " Taka is " + document.getElementById(reason).innerHTML;
        p.innerText ="Time: " + new Date() ;
        // add them ass sub element in div
        div.appendChild(h3);
        div.appendChild(p) ;
        // div style add
        div.style.borderRadius = "16px";
        div.style.border ="1px solid";
        div.style.width= "80vw"
        div.style.margin = " 8px"
        div.style.padding = " 16px"
        //  h3 style add
        h3.style.color = "black";
        h3.style.fontWeight = "bold"
        h3.style.fontSize = "20px"
        // add div to html id
        document.getElementById('history').insertBefore(div,document.getElementById('history').firstChild);
    }
    
}

function ButtonEvent(button , buttonEvent){
    document.getElementById('donate-js').style.backgroundColor = "#1111114D";
    document.getElementById('history-js').style.backgroundColor = "#1111114D";
    document.getElementById('history').style.display ="none";
    document.getElementById('donation').style.display =" none";
    document.getElementById(button).style.backgroundColor = "#B4F461"
    document.getElementById(buttonEvent).style.display =" flex";
}
