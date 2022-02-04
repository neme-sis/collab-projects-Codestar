var contentone = document.getElementsByClassName("contentone")[0]
var content2 = document.getElementsByClassName("content2")[0]
var contenti = document.getElementsByClassName("contenti")[0]
var contentii = document.getElementsByClassName("contentii")[0]
var Gairik = false;
var Sayan = false;
const gairik = () => {
    if (!Gairik) {
        contentone.style.transform = 'translate(0px, -150px)';
        contenti.style.opacity = '1';
        Gairik = true;
    }
    else {
        contentone.style.transform = 'translate(0px, 0px)';
        contenti.style.opacity = '0';
        Gairik = false;
    }

}


const sayan = () => {
    if (!Sayan) {
        content2.style.transform = 'translate(0px, -150px)';
        contentii.style.opacity = '1';
        Sayan = true;
    }
    else {
        content2.style.transform = 'translate(0px, 0px)';
        contentii.style.opacity = '0';
        Sayan = false;
    }
}