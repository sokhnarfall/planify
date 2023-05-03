const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize an empty list of users
const users = [];

// Homepage
app.get("/", (req, res) => {
  // Render the homepage with two buttons and a subtitle
  res.send(`
    <h1>Welcome to MyList!</h1>
    <h2>Please Signup to Continue</h2>
    <button onclick="window.location.href='/login'">Login</button>
    <button onclick="window.location.href='/signup'">Signup</button>
  `);
});

// Login page
app.get("/login", (req, res) => {
  // Render the login page
  res.send(`
    <h1>Login</h1>
    <form method="post" action="/login">
      <input type="text" name="username" placeholder="Username">
      <input type="password" name="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  `);
});

// Handle login form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Check if the user exists
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    // Redirect to the homepage
    res.redirect("/homepage");
  } else {
    // If the user does not exist, show an error message
    res.send("<h1>Invalid username or password</h1>");
  }
});

// Signup page
app.get("/signup", (req, res) => {
  // Render the signup page
  res.send(`
    <h1>Signup</h1>
    <form method="post" action="/signup">
      <input type="text" name="username" placeholder="Username">
      <input type="password" name="password" placeholder="Password">
      <button type="submit">Signup</button>
    </form>
  `);
});

// Handle signup form submission
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  // Check if the user already exists
  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    // If the user already exists, show an error message
    res.send(
      "<h1>Username already exists. Please choose a different username.</h1>"
    );
  } else {
    // If the user does not exist, create a new user and redirect to the login page
    users.push({ username, password });
    res.redirect("/login");
  }
});

// Homepage
app.get("/homepage", (req, res) => {
  // Render the homepage with a welcome message for the authenticated user
  res.send(`
  <h1>Welcome to Planify, ${req.query.username}!</h1>
    <h2>Add a Task</h2>


// <form id="add-task-form">
//   <label for="task-title">Task Title:</label>
//   <input type="text" id="task-title" name="task-title">
//   <label for="task-description">Task Description:</label>
//   <input type="text" id="task-description" name="task-description">
//   <label for="task-date">Task Date:</label>
//   <input type="date" id="task-date" name="task-date">
//   <span onclick="newElement()" class="addBtn">Add</span>
// </form>

// <ul id="task-list"></ul>

// <script>

//   const addTaskForm = document.querySelector('#add-task-form');
//   const taskTitleInput = document.querySelector('#task-title');
//   const taskDescriptionInput = document.querySelector('#task-description');
//   const taskDateInput = document.querySelector('#task-date');
//   const taskList = document.querySelector('#task-list');
  

//   addTaskForm.addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     const task = {
//       title: taskTitleInput.value,
//       description: taskDescriptionInput.value,
//       date: taskDateInput.value
//     };

       // Clear the form inputs
//       taskTitleInput.value = '';
//       taskDescriptionInput.value = '';
//       taskDateInput.value = '';
//   });
// </script>


// new stuff

<html>  
<head>
<style>
.submitBtn {
  padding: 10px;
  background: #90ee90;
  width: 100%;
  color: #555;
  float: left;
  text-align: center;
  font-size: 18px;
  transition: 0.3s;
  border-radius: 0;
}
  .taskfield {
    padding: 5px;
    width: 150%;
    color: #555;
    float: left;
    text-align: left;
    font-size: 16px;
    //cursor: pointer;
    border-radius: 0;
    }
  .descriptionfield {
    padding: 5px;
    width: 150%;
    color: #555;
    float: left;
    text-align: left;
    font-size: 16px;
    border-radius: 0;
    }
  .datefield {
    padding: 5px;
    width: 150%;
    color: #555;
    float: left;
    text-align: left;
    font-size: 16px;
    border-radius: 0;
    }
</style>  

<title> ToDo Page </title>  
</head>  

<body align="center">  
<h2> Create a New Task </h2>  
<table cellspacing="2" align="center" cellpadding="8" border="0">  

<tr><td> Task </td>   
<td><input type="text" placeholder="Enter a title for this task" class="taskfield" id="taskTitle"></td></tr>  

<tr><td> Description </td>  
<td><input type="text" placeholder="Elaborate more on this task..." class="descriptionfield" id="description"></td></tr>

<tr><td> Date </td>  
<td><input type="date" name="task-date" class="datefield" id="dateInput"></td></tr>

<td><input type="submit" value="Add Task" name="Add Task" onclick="newTask()" class="submitBtn"</td>

</table>
</script>

<h1>My To Do List</h1>
<ul id="taskList"></ul>

<script>
function newTask() {
let data = ["listitem1", "listitem2"];
let list = document.getElementById("taskList");
 
data.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});
}

</script>
</body>
</html>

`);
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
