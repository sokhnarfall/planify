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



  <head>
    <style>
    body{
    background-color: #DBF9FC; 
 background-image: url("https://images.pexels.com/photos/606539/pexels-photo-606539.jpeg?auto=compress&cs=tinysrgb&w=800");
 			background-size: cover;
			
    
    }
      .submitBtn {
        padding: 10px;
        background: #EDBB99;
        width: 100%;
        color: white;
        font-weight: bold;
        float: left;
        text-align: center;
        font-size: 18px;
        transition: 0.3s;
        border-radius: 0;
          font-family: Marker Felt, fantasy;
      }
      .taskfield {
        padding: 5px;
        width: 150%;
        color: #555;
        float: left;
        text-align: left;
        font-size: 16px;
        --cursor: pointer;
        border-radius: 0;
        font-weight: bold
        
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
      h2{
      color:white;
      font-size: 40px;
      font-weight: bold;
      font-family: Marker Felt, fantasy;
      }
   	title{
    color: white;
    }
  
    ul.no-bullets{
    list-style-type:none;
    }
    ul {
    margin:0;
    padding:0;
    }
    ul li 
    {
    cursor: pointer;
 -- position: relative;
  --padding: 6px 8px 6px 8px;
  list-style-type: none;
  --background: #eee;
  background-size: .5px;
  font-size: 18px;
  --transition: 0.2s;
}

    </style>  
    <title> ToDo Page </title>
    
  </head>  
  <body align-item="center">  
    <h2> Enter A Task </h2>  
    <form id="add-task-form">
      <div class="input-group">
        <label for="task-title"style = "color:white; font-size:25px; font-weight:bold;   font-family: Marker Felt, fantasy;">Task Title:</label>
        <input type="text" id="task-title" name="task-title" class="taskfield">
      </div>
      <div class="input-group">
        <label for="task-description" style = "color:white;font-size:25px; font-weight:bold;   font-family: Marker Felt, fantasy;;">Task Description:</label>
        <input type="text" id="task-description" name="task-description" class="descriptionfield">
      </div>
      <div class="input-group">
        <label for="task-date"style = "color:white; font-size:25px; font-weight:bold;   font-family: Marker Felt, fantasy;">Task Date:</label>
        <input type="date" id="task-date" name="task-date" class="datefield">
      </div>
      <button type="submit" class="submitBtn">Add Task</button>
    </form>
    
    <ul id="task-list" class="no-bullets"></ul>
    
    <script>
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
    console.log("\n");
        const taskItem = document.createElement('LI');
        taskItem.innerHTML = `<h3 style = "color:white; font-size:15px; font-weight:bold;   font-family: Marker Felt, fantasy;">${task.title}</h3><p style = "color:white; font-size:15px; font-weight:bold;   font-family: Marker Felt, fantasy;">${task.description}</p>
        <p style = "color:white; font-size:15px; font-weight:bold;   font-family: Marker Felt, fantasy;">${task.date}</p>`;
        taskList.appendChild(taskItem);
        
        
        //resource WWschool 
         const closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.innerHTML = '\u00D7';
  taskItem.appendChild(closeButton);
  
    // Add a click event listener to the close button
  closeButton.addEventListener('click', function() {
    taskItem.style.display = 'none';
  });
    
        // Clear the form inputs
        taskTitleInput.value = '';
        taskDescriptionInput.value = '';
        taskDateInput.value = '';
      });
      
      // Resource: WWschool 
      const taskItems = document.getElementsByTagName('LI');
for (let i = 0; i < taskItems.length; i++) {
  const closeButton = document.createElement('SPAN');
 
  closeButton.innerHTML = '\u00D7';
   closeButton.className = 'close';
  taskItems[i].appendChild(closeButton);

  closeButton.addEventListener('click', function() {
    taskItems[i].style.display = 'none';
  });
}
      
    </script>
  </body>
</html>


// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
