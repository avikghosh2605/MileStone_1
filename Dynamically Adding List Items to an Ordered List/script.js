const contentList = ["HTML and Semantics","Starting with CSS","Working Template"];
      let index = 0;
      
      let btn = document.getElementById("btn");
      function addContent() {
          let list = document.getElementById("list");
          if(index<contentList.length){
              const newItem = document.createElement("li");
              newItem.textContent=contentList[index];
              list.appendChild(newItem);
              index++;
          }
          else{
              alert("all items have been added.");
          }
          
      }
      btn.addEventListener("click",addContent);