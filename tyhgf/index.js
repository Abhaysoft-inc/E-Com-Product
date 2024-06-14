const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SignInlink');
const RegisterLink=document.querySelector('.SignUplink');
RegisterLink.addEventListener('click',()=>{
    container.classList.add('active');
})
