var swtch = document.getElementsByClassName("switch")[0];
var span1 = document.getElementById("switch1");
var span2 = document.getElementById("switch2");
var signin = document.getElementsByClassName("signin")[0];
var signup = document.getElementsByClassName("signup")[0];

span2.addEventListener('click', () => {
    span1.style.color = 'rgba(255, 255, 255, 0.787)';
    span2.style.color = 'black';
    swtch.style.left = '50%';
    signin.style.display = 'none';
    signup.style.display = 'block';
})
span1.addEventListener('click', () => {
    span2.style.color = 'rgba(255, 255, 255, 0.787)';
    span1.style.color = 'black';
    swtch.style.left = '2%';
    signin.style.display = 'block';
    signup.style.display = 'none';
})