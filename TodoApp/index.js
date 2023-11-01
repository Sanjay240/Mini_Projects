let userInput = document.querySelector('input');
let btn  = document.querySelector('button');
let display = document.querySelector('ul');


display.addEventListener('click', function(event){
    console.log(event.target)
    console.log("button clicked");
})



btn.addEventListener('click', function(){
    let task = userInput.value;
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete"
    deleteButton.classList.add('delButton');
    deleteButton.addEventListener('click', deleteItem);

    li.innerText = task;
    display.appendChild(li);
    li.appendChild(deleteButton);
})

function deleteItem(){
    let parent = this.parentElement;
    parent.remove();
}


