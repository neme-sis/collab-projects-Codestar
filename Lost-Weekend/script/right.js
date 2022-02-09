var right = document.getElementsByClassName("right")[0];
var threedot = document.getElementsByClassName("mybtn")[0];
var close = document.getElementsByClassName("close")[0];
var hiddentext = document.getElementsByClassName("moretext")[0];

// Button [More]
var more = document.getElementsByClassName("more")[0];
// Button [Less]
var less = document.getElementsByClassName("less")[0];
const btnclick = () => {

     right.style.display = "flex";
     threedot.style.display = "none";
     close.style.position = "absolute"
     close.style.right = "0px"

}

const btnclickreverse = () => {

     right.style.display = "none";
     threedot.style.display = "block";
     threedot.style.position = "absolute";
     threedot.style.top = "0px"

}

// After clicking the more button
const displayHidden = () => {
    hiddentext.style.display = "block"
    more.style.display = "none"
    less.style.display = "block"
}

// After clicking the less button
const hideText = () => {

     hiddentext.style.display = "none"
     more.style.display = "block"
     less.style.display = "none"
     
     
}



