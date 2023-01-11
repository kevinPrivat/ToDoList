function addtask(){
    if(document.getElementById('newtask').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.getElementById('tasks').innerHTML += `
        <section id="container">
            <div class="task" id="child">
            <input type=checkbox onclick="barre(this.parentNode)"/>
                <span class="task__name">
                    ${document.getElementById('newtask').value}
                </span>
                <button id="hide" onclick="deletetask(this.parentNode)" class="task__delete">delete</button>
                <button id="hide" onclick="changetask(this.parentNode); return false" class="task__change">change</button>
            </div>
        </section>`;
            document.getElementById("newtask").value ='';
    }   
}

function changetask(parent) {
    parent.querySelector('.task__name').innerHTML += 
    '<form><input id="taskname__change" placeholder="je suis content je vomis"><div/></form>';
    let form = parent.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        changecontent(parent)
    });
}
function changecontent(parent){
    let changevalue = parent.querySelector('#taskname__change').value;
    parent.querySelector('.task__name').innerHTML = changevalue;
}
function barre(parent){
    let barre = parent.querySelector('.task__name');
    barre.style.textDecoration = "line-through";
}
function deletetask(childElement){
childElement.parentNode.removeChild(childElement);
}