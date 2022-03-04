   /*<div id="content"></div>
    <div id="container">
    <h1>ONE MINUTE TIMER APP</h1>



    <h1><span id="minutes">00</span>:<span id="seconds">00</span></h1>
        <div id="button">
            <button id="startbtn">start</button>

            <button id="stopbtn">stop</button>
        </div>
    </div>
</div>*/

let seconds=document.querySelector('#seconds');

let minutes=document.querySelector('#minutes');

let startbtn=document.querySelector('#startbtn');

let stopbtn=document.querySelector('#stopbtn');

let resetbtn=document.querySelector('#resetbtn')

let counter=0;

let myseconds=0;

let myminute=0;

let mytimer;

startbtn.addEventListener('click', function(){ /*seconds coding*/ startbtn.disabled=true; stopbtn.disabled=false; resetbtn.disabled=false;




mytimer=setInterval(function(){myseconds=counter++; seconds.innerHTML=myseconds; if(myseconds>59){myseconds='00'; counter=0; myminute++;} else if(myseconds>9){seconds.innerHTML=myseconds} else{seconds.innerHTML='0' + myseconds}



/*minutes coding*/ 
 if(myminute>59){minutes.innerHTML='00'; seconds.innerHTML='00'; myminute=0; counter=0; myseconds=0; clearInterval(mytimer)} else if(myminute>9){minutes.innerHTML=myminute} else{minutes.innerHTML='0'+ myminute}},1000)})


stopbtn.addEventListener('click', function(){stopbtn.disabled=true; resetbtn.disabled=false; startbtn.disabled=false;
    
    clearInterval(mytimer)})

resetbtn.addEventListener('click', function(){ startbtn.disabled=false; stopbtn.disabled=false; resetbtn.disabled=true; myminute=0; counter=0; minutes.innerHTML='00'; seconds.innerHTML='00'; clearInterval(mytimer)})