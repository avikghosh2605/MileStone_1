let paragraph = document.getElementById("paragraph");
let text = paragraph.innerHTML.split(" ");
for(let i = 0 ; i<text.length ; i++){
    let word=text[i];

    if(word.length>8){
       text[i]="<span style='background-color: yellow'>"+ text[i] +"</span>";
    }
}
paragraph.innerHTML = text.join(" ");