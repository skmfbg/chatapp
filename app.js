const socket=io();
var user_id;


const sendbtn=document.getElementById('send-btn');
const user=document.getElementById('user');
const friend=document.getElementById('friend');
const message=document.getElementById('chat-message');
const chatdiv=document.getElementById('chat-div');
const startbtn=document.getElementById('start-btn');
const main=document.getElementById('main');

function startChat(){
    do{
      user_id=prompt("Enter username!  ");

    }while(!user_id)
    chatdiv.style.display="block";
    
}


sendbtn.addEventListener("click",()=>{
    if (message.value==""){
        alert("Please Enter message...")
    }else{
    const obj={
        uid:user_id,
        mess:message.value,
        date:new Date()
    }
    const d=document.createElement('div');
    d.innerHTML=`<div id="user">
        <span>${obj.mess}</span>
        <p>${obj.date}</p>
    </div>`
    main.appendChild(d);

    socket.emit('client',obj)
    message.value="";
    }
})

socket.on('chat',data=>{
    const d=document.createElement('div');
    d.innerHTML=`<div id="friend">
          <span>${data.uid}</span>             
          <p>${data.mess}</p>
          <p id="date">${data.date}</p>
    </div>`;
    main.appendChild(d);
})


startbtn.addEventListener("click",()=>{
    chatdiv.style.display="block";
    startbtn.style.display="none";
})