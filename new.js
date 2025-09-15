let addbtn = document.getElementById("addbtn").addEventListener("click",()=>{


   let note =document.createElement("div")
   note.className="note"

  let cancel =document.createElement("span")
  cancel.className="cancel"
  cancel.innerHTML="X"

  cancel.addEventListener("click", ()=>{
    note.remove();
  })



let text = document.createElement("textarea")
text.placeholder="....Write here...."

note.appendChild(cancel)
note.appendChild(text)
document.body.appendChild(note)

note.style.top=Math.random() * 500 + "px";
note.style.left=Math.random() * 800 + "px";

dragnote(note);
})



function dragnote(note){

  let dragging=false;
  let offsetX,offsetY;
  
  
  note.addEventListener("mousedown", function(e){
  if(e.target.tagName === "TEXTAREA") return;
      dragging=true;
      offsetX=e.clientX - note.offsetLeft;
       offsetY=e.clientX - note.offsetTop;
  });
  
  document.addEventListener("mousemove", function(e){
  
      if(dragging)
      {
          note.style.left = e.clientX - offsetX + "px";
          note.style.top = e.clientY - offsetY + "px";
  
      }
  });
  
  document.addEventListener("mouseup", function () {
      dragging=false;
  });
  
  }
