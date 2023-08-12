const email = document.getElementById("email");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const button = document.querySelector(".btn");

const col1 = document.querySelector(".col-1");
const col2 = document.querySelector(".col-2");
const col3 = document.querySelector(".col-3");

button.addEventListener('click',(e)=>{
    e.preventDefault();
    if(pattern.test(email.value)){
      col1.classList.add("none");
      col2.classList.add("none");
      col3.classList.remove("none");
      document.querySelector(".container").classList.add("home");
      document.getElementById("userMail").innerHTML = email.value;
    }else{
      document.querySelector(".invalid").style.display = "block";
      email.classList.add("emailInvalid");  
      email.focus();
    }
})

email.addEventListener("input", (e) => {
  if(e.target.value === "") {
    document.querySelector(".invalid").style.display = "none";
    email.classList.remove("emailInvalid");  
  } false;
})

document.querySelector(".dismissBtn").addEventListener("click", () => {
  window.location.reload(true)
})