
//setting up variables *kol el-var ely h use it will be here*
let theInput = document.querySelector('.add-task input') , //el-input which in write in it
    theAddButton = document.querySelector('.add-task .plus'), //el button
    tasksContainer = document.querySelector('.tasks-content'), //which has all of my tasks
    tasksCount = document.querySelector('.tasks-count span'),
    tasksfinished = document.querySelector('.completed-tasks span');

//focus on input fieled 
window.onload = function () { 
   theInput.focus();
};

//Adding the task
theAddButton.onclick = function () {
   //checked if theInput is empty
   if(theInput.value === '') {
      //swal("there is no input ") //sweet alert
       alert('there is no value intered ..please inter a value'); 
   }
   else {

     let noTasksMsg = document.querySelector('.no-tasks-message');
      
     //check if span msg is exist
        if( document.body.contains(document.querySelector(".no-tasks-message"))) {
           //remove the no-task-msg 
           noTasksMsg.remove();
        }
        //create main span element 
      let mainspan = document.createElement('span');
      
      //create delete button
      let deleteElement =document.createElement('span');

      //create the main span text
         text= document.createTextNode(theInput.value);
   
       //create the delete text
       let deletetext = document.createTextNode("Delete");
       
       //add text to main span
       mainspan.appendChild(text);

       //add class to main span 
    
        mainspan.className = "task-box";
       
       //add text to delete button
       deleteElement.appendChild(deletetext);

       //add class to delete button 
       deleteElement.className = "delete";

       //add delete button to main span 
       mainspan.appendChild(deleteElement);

       //add the task to the container 
       tasksContainer.appendChild(mainspan);
      
       //empty the the input
       theInput.value = '';

       //focus in field
       theInput.focus();

       //calculate task
       calculateTasks();
   }
};

document.addEventListener('click', function(e ) {

    //delete task   //when click تارجت عشان العنصر الي احنا اتفقنا عليه واخترناه
    if(e.target.className == 'delete'){  
        //remove current task 
        e.target.parentNode.remove();

        //check number of tasks inside the container 
        if(tasksContainer.childElementCount == 0) {
            createNoTasks();
        }
    }
    
    //finished the task   *لو الكلاس بتاعه يحتوي علي كلمه تاسك بوكس *
    if(e.target.classList.contains('task-box')){  //when click تارجت عشان العنصر الي احنا اتفقنا عليه واخترناه

          //toggle class finished 
          e.target.classList.toggle('finished');  //toggle ->if class finished exist remove it and else
     }
      //focus
    theInput.focus();
     //calculate task
     calculateTasks(); 
});

//function create no tasks message
function createNoTasks() {
    //create msg span element 
    let msgSpan =document.createElement("span");

    //Create the text message 
    let msgtext = document.createTextNode('No tasks to show ');

    //add text to msgspan
    msgSpan.appendChild(msgtext);

    //add class to to msg span 
    msgSpan.className="no-tasks-message";

    //append the msg to the task container
    tasksContainer.appendChild(msgSpan);
}

//function to count the number of tasks
function calculateTasks() {
     
  //calculate all tasks
  tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

  //calculate completed tasks
  tasksfinished.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}