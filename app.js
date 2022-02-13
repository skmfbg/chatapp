const socket=io();
var user_id;

socket.on("chat",(data)=>{
    console.log(data)
})

const sendbtn=document.getElementById('send-btn');
const user=document.getElementById('user');
const friend=document.getElementById('friend');
const message=document.getElementById('chat-message');
const chatdiv=document.getElementById('chat-div');
const startbtn=document.getElementById('start-btn');

function startChat(){
    do{
      user_id=prompt("Enter username!  ");

    }while(!user_id)

    console.log(user_id)
    chatbox.style.display="block";
    
}


sendbtn.addEventListener("click",()=>{
    const d=document.createElement("div");
    const s=document.createElement("span");
    s.innerText=message.value;
    d.appendChild(s);
    user.appendChild(d);
    socket.emit('client',message.value)

})

socket.on('chat',data=>{
    const d=document.createElement("div");
    const s=document.createElement("span");
    s.innerText=data;
    d.appendChild(s);
    friend.appendChild(d);
})


startbtn.addEventListener("click",()=>{
    chatdiv.style.display="block";
    startbtn.style.display="none";
})