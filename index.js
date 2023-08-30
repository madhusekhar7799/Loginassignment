const popupButton = document.getElementById("popupButton");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");




const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.innerHTML = '&#128064;';
    } else {
        passwordInput.type = 'password';
        toggleButton.innerHTML = '&#128065;';
    }
});  
const signpassword = document.getElementById('signpassword');
const signtoggle = document.getElementById('signtoggle');

signtoggle.addEventListener('click', () => {
    if (signpassword.type === 'password') {
        signpassword.type = 'text';
        signtoggle.innerHTML = '&#128064;';
    } else {
        signpassword.type = 'password';
        signtoggle.innerHTML = '&#128065;';
    }
});  

        

popupButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    popup.style.display = "none";
});

loginTab.addEventListener("click", () => {
    loginForm.style.display = "block";
    loginForm.style.display = "flex";
    loginForm.style.flexDirection = "column";
    loginForm.style.gap = "10px";
    signupForm.style.display = "none";
});

signupTab.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    signupForm.style.display = "flex";
    signupForm.style.flexDirection = "column";
    signupForm.style.gap = "10px";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const signupName = document.getElementById("signupName").value;
    const signupEmail = document.getElementById("signupEmail").value;
    const signupMobile = document.getElementById("signupMobile").value;
    const signupPassword = document.getElementById("signupPassword").value;
});


