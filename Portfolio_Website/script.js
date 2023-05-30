function loadDoc(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var div = document.getElementById("proDiv").innerHTML=xhr.responseText;
        }
    }
    xhr.open("GET", "./a.txt", true);
    xhr.send();
}
function loadDocCon(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var div = document.getElementById("proDiv").innerHTML=xhr.responseText;
        }
    }
    xhr.open("GET", "./contact.txt", true);
    xhr.send();
}

function loadDocArt(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var div = document.getElementById("proDiv").innerHTML=xhr.responseText;
        }
    }
    xhr.open("GET", "./article.txt", true);
    xhr.send();
}