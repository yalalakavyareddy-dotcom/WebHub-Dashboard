/* ==========================================
   DEVFUSION TODO MANAGER
   Developed by: Yalala Kavya Reddy
========================================== */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const addTask = document.getElementById("addTask");

const taskList = document.getElementById("taskList");

const totalTask = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");
const pendingTask = document.getElementById("pendingTask");
const highTask = document.getElementById("highTask");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const searchTask = document.getElementById("searchTask");


// ===========================
// Save Tasks
// ===========================

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}


// ===========================
// Dashboard Statistics
// ===========================

function updateStats(){

    const total = tasks.length;

    const completed = tasks.filter(task=>task.completed).length;

    const pending = total-completed;

    const high = tasks.filter(task=>task.priority==="High").length;

    totalTask.textContent=total;

    completedTask.textContent=completed;

    pendingTask.textContent=pending;

    highTask.textContent=high;

    let progress = total===0 ? 0 :

    Math.round((completed/total)*100);

    progressFill.style.width=progress+"%";

    progressText.textContent=progress+"%";

}


// ===========================
// Display Tasks
// ===========================

function displayTasks(list=tasks){

    taskList.innerHTML="";

    list.forEach((task,index)=>{

        let row=document.createElement("tr");

        row.innerHTML=`

        <td>${task.name}</td>

        <td class="${task.priority.toLowerCase()}">

            ${task.priority}

        </td>

        <td>${task.date}</td>

        <td class="${task.completed ? "completed":"pending"}">

        ${task.completed ? "Completed":"Pending"}

        </td>

        <td>

        <button class="complete"

        onclick="completeTask(${index})">

        ✔

        </button>

        <button class="edit"

        onclick="editTask(${index})">

        Edit

        </button>

        <button class="delete"

        onclick="deleteTask(${index})">

        Delete

        </button>

        </td>

        `;

        taskList.appendChild(row);

    });

    updateStats();

    saveTasks();

}



// ===========================
// Add Task
// ===========================

addTask.addEventListener("click",()=>{

    if(taskInput.value===""){

        alert("Please enter a task");

        return;

    }

    tasks.push({

        name:taskInput.value,

        priority:priority.value,

        date:dueDate.value,

        completed:false

    });

    taskInput.value="";

    dueDate.value="";

    displayTasks();

});



// ===========================
// Delete
// ===========================

function deleteTask(index){

    if(confirm("Delete this task?")){

        tasks.splice(index,1);

        displayTasks();

    }

}



// ===========================
// Complete
// ===========================

function completeTask(index){

    tasks[index].completed=!tasks[index].completed;

    displayTasks();

}



// ===========================
// Edit
// ===========================

function editTask(index){

    const newTask=prompt(

        "Edit Task",

        tasks[index].name

    );

    if(newTask!==null && newTask!==""){

        tasks[index].name=newTask;

        displayTasks();

    }

}



// ===========================
// Search
// ===========================

searchTask.addEventListener("keyup",()=>{

    const keyword=searchTask.value.toLowerCase();

    const filtered=tasks.filter(task=>

    task.name.toLowerCase()

    .includes(keyword)

    );

    displayTasks(filtered);

});



// ===========================
// Welcome
// ===========================

console.log("DevFusion ToDo Loaded");



// ===========================
// Initial Load
// ===========================

displayTasks();



// ===========================
// Footer Year
// ===========================

const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML=

`© ${new Date().getFullYear()} DevFusion Productivity Hub | Designed by Yalala Kavya Reddy`;

}