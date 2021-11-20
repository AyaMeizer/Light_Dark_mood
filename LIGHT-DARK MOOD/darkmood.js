// const dark = document.querySelector("#dark-toggle");
let username = document.getElementById('name');
let message = document.getElementById('message');
let form = document.getElementById('form');
function darkmood() {
    document.body.classList.toggle("dark");
  }
function lightmood(item){
    item.innerHTML='Light Mood';
    
}
let x = document.getElementById("myLinks");
let y = document.getElementsByClassName('btn');
function myFunction() {
  x.classList.toggle("toggle");
  }

form.addEventListener('submit',submit)
function submit(){
  localStorage.setItem("username",username.value);
  localStorage.setItem("message",message.value);
} 
