//=================THEME TOGGLE

const themeBtn=document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click',() => {let bodyClass = document.body.className;if(!bodyClass){
    bodyClass='dark';
    document.body.className=bodyClass;}
    
})