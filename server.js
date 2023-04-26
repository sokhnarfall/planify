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
    <h1>Welcome to MyList!</h1>
    <h2>Hello, ${req.query.username}!</h2>
    <h2>Add a Task</h2>
<form id="add-task-form">
  <label for="task-title">Task Title:</label>
  <input type="text" id="task-title" name="task-title">
  <label for="task-description">Task Description:</label>
  <input type="text" id="task-description" name="task-description">
  <label for="task-date">Task Date:</label>
  <input type="date" id="task-date" name="task-date">
  <button type="submit">Add Task</button>
</form>
<ul id="task-list"></ul>
<script>
  function addTask() {
    // Get the input field and the task list
    var input = document.getElementById("taskInput");
    var list = document.getElementById("taskList");

    // Create a new list item and add it to the list
    var item = document.createElement("li");
    item.innerHTML = input.value;
    list.appendChild(item);

    // Clear the input field
    input.value = "";
  }


  const addTaskForm = document.querySelector('#add-task-form');
  const taskTitleInput = document.querySelector('#task-title');
  const taskDescriptionInput = document.querySelector('#task-description');
  const taskDateInput = document.querySelector('#task-date');
  const taskList = document.querySelector('#task-list');
  
  

  addTaskForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const task = {
      title: taskTitleInput.value,
      description: taskDescriptionInput.value,
      date: taskDateInput.value
    };

      // Clear the form inputs
    taskTitleInput.value = '';
      taskDescriptionInput.value = '';
      taskDateInput.value = '';
  })
   //.catch(error => console.log(error));
 // });
   // }
</script>
<ul id="planner-list">
  <!-- Existing tasks will be added here -->
</ul>
  `);
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
