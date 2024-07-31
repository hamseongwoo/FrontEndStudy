const yes = document.querySelector(".yes");

const no = document.querySelector(".no");

const answer = true;

function firstYesAnswer(event) {
    if(event){
        alert("틀렸습니다 다시 풀어주세요");
    }
}
function firstNoAnswer(event) {
    if(event){
        window.location.href ="http://127.0.0.1:5501/end/end.html";
    }
    else{
        return;
    }
}

yes.addEventListener("click", firstYesAnswer);
no.addEventListener("click", firstNoAnswer);