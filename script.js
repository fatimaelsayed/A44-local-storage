const save=document.getElementById("save");
const display=document.getElementById("display");
const clear=document.getElementById("clear");
const title=document.getElementById("title");
const notes=document.getElementById("notes");
const displayttitle=document.getElementById("displaytitle");
const displaynotes=document.getElementById("displaynotes");

save.addEventListener("click", function(){
    if(title.value=="" || notes.value==""){
        alert("please fill out the boxes");
    }
    else{
        localStorage.setItem("title",title.value);
        localStorage.setItem("notes",notes.value);
    }
});

display.addEventListener("click",function(){
    displayttitle.innerHTML=localStorage.getItem("title") || "";
    displaynotes.innerHTML=localStorage.getItem("notes") || "";
});

clear.addEventListener("click", function(){
    localStorage.removeItem("title");
    localStorage.removeItem("notes");
    displayttitle.innerHTML="";
    displaynotes.innerHTML="";
    title.value="";
    notes.value="";
});
