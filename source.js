
//Adding the item functionality
document.querySelector('button.add').onclick = function(e) {
    e.preventDefault()
    if(document.querySelector('.task').value.length == 0){
        alert("Write something in your To-Do list!")
    } else {
        const placeholder = document.querySelector('.placeholder');
        if (placeholder) placeholder.remove();
        document.querySelector('ul').innerHTML += `
            <li>
                <div class="checkbox">
                 <input type="checkbox"/>
                    ${document.querySelector('.task').value}
                    ${task.value = ""}
                </div>
                <div class="delete">
              <i class="fa-solid fa-circle-xmark"></i>
            </div>
            </li>
           `;
       }
  }
            let list = document.querySelector(".list");
                list.onclick = function(e){
                if (e.target.classList.contains("fa-circle-xmark")) {
                   e.target.parentNode.parentNode.remove()
                }
            }
            
               
                // // Get the element with id="defaultOpen" and click on it
                // document.querySelector("tablinksall").click();

               //TABULATION
                function openTab(evt, tabName) {
                // Declare all variables
                var i, tabcontent, tabcontentall, tablinks;
              
                // Get all elements with class="tabcontent" and hide them
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                  tabcontent[i].style.display = "none";
                }
              
                // Get all elements with class="tablinks" and remove the class "active"
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                  tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
              
                // Show the current tab, and add an "active" class to the button that opened the tab
                document.getElementById(tabName).style.display = "block";
                evt.currentTarget.className += " active";
              }

                // Get all elements with class="tabcontentall" and hide them
                tabcontentall = document.getElementsByClassName("tabcontentall");
                for (i = 0; i < tabcontent.length; i++) {
                  tabcontent[i].style.display = "none";
                }



