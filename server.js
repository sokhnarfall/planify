app.get("/", (req, res) => {
    // Render the homepage with two buttons and a subtitle
    res.send(`
      <html>
    <head>
      <style>
        body {
          background-color: #F5F5F5; /* crème background */
          font-family: Futura, sans-serif; /* Futura font */
          color: black;
        }
        .container {
          margin: 0 auto;
          max-width: 600px;
          padding: 2rem;
          border: 5px solid lightgray;
          border-radius: 0.25rem;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        h2 {
          font-size: 2rem;
          font-weight: normal;
          margin-bottom: 2rem;
        }
        button {
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          color: white;
          background-color: #008CBA;
          cursor: pointer;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease-in-out;
        }
        button:hover {
          background-color: #005F6B;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Planify!</h1>
        <h2>Please Signup to Continue</h2>
        <button onclick="window.location.href='/login'">Login</button>
        <button onclick="window.location.href='/signup'">Signup</button>
      </div>
    </body>
  </html>
  `);
});

// Login page
app.get("/login", (req, res) => {
  // Render the login page
  res.send(`
    <h1 style="text-align: center; font-size: 2rem; margin-top: 1rem; font-family: Futura, sans-serif;">Login</h1>
    <form method="post" action="/login" style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
      <input type="text" name="username" placeholder="Username" style="padding: 0.5rem; margin: 0.5rem; border: none; border-radius: 0.25rem; width: 100%; max-width: 400px; font-family: Futura, sans-serif;">
      <input type="password" name="password" placeholder="Password" style="padding: 0.5rem; margin: 0.5rem; border: none; border-radius: 0.25rem; width: 100%; max-width: 400px; font-family: Futura, sans-serif;">
      <button type="submit" style="background-color: #008CBA; color: white; border: none; border-radius: 0.25rem; padding: 0.5rem 1rem; margin: 0.5rem; font-size: 1rem; cursor: pointer; transition: all 0.3s ease-in-out; font-family: Futura, sans-serif;">Login</button>
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
    res.send("<h1 style='color: red; text-align: center; font-size: 2rem;'>Invalid username or password</h1>");
  }
});

// Signup page
app.get("/signup", (req, res) => {
  // Render the signup page
  res.send(`
    <h1 style="font-family: Futura, sans-serif; font-size: 3em; margin-bottom: 10px; text-align: center;">Signup</h1>
    <form method="post" action="/signup" style="display: flex; flex-direction: column; align-items: center;">
      <input type="text" name="username" placeholder="Username" style="padding: 10px; border-radius: 5px; margin-bottom: 10px; font-family: Futura, sans-serif;">
      <input type="password" name="password" placeholder="Password" style="padding: 10px; border-radius: 5px; margin-bottom: 10px; font-family: Futura, sans-serif;">
      <button type="submit" style="padding: 10px 20px; border: none; border-radius: 5px; color: white; background-color: lightblue; font-size: 1.5em; cursor: pointer;">Signup</button>
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
      "<h1 style='font-family: Futura, sans-serif; color: black; background-color: cream; padding: 10px; border: 5px solid lightgray; border-radius: 10px;'>Username already exists. Please choose a different username.</h1>"
    );
  } else {
    // If the user does not exist, create a new user and redirect to the login page
    users.push({ username, password });
    res.redirect("/login");
  }
});


// Route to display the homepage
app.get("/homepage", (req, res) => {
  res.send(`
        <html>  
      <head>
        <title>Welcome to Planify!</title> 
        <style>
          * {
            font-family: Helvetica, Arial, sans-serif;
            border-radius: 5px;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            background-color: #F2F2F2;
            color: #333333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }

          h1 {
            font-size: 3rem;
            margin-bottom: 1.5rem;
          }

          h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
          }
          
          label {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          input[type=text] {
            padding: 0.5rem;
            font-size: 1.5rem;
            border: none;
            width: 70%;
            background-color: #FFFFFF;
            margin-bottom: 1rem;
            border: 2px solid #CCCCCC;
          }
          
          input[type=submit] {
            padding: 0.5rem;
            font-size: 1.5rem;
            border: none;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          
          input[type=submit]:hover {
            background-color: #3E8E41;
          }
          
          ul {
            list-style-type: none;
            padding: 0;
          }
          
          li {
            font-size: 1.5rem;
            padding: 0.5rem;
            margin-bottom: 0.5rem;
            background-color: #FFFFFF;
            display: flex;
            align-items: center;
            box-shadow: 0px 0px 10px #00000040;
            width: 70%;
          }
          
          li span {
            margin-right: 1rem;
          }
          
          button {
            background-color: #f44336;
            color: white;
            border: none;
            font-size: 1.5rem;
            padding: 0.5rem;
            margin-left: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          
          button:hover {
            background-color: #f44336d0;
          }
          
          input:focus, button:focus {
            outline: none;
            box-shadow: 0px 0px 5px #4CAF50;
          }
        </style>
      </head>  
      <body>
        <h1>Welcome to Planify!</h1>
        <form onsubmit="addTask(event)">
          <label for="task-title">Task:</label>
          <br>
          <input type="text" id="task-title" name="task-title">
          <br><br>
          <input type="submit" value="Add Task" onclick="addTask()">
        </form>
        <br>
        <h2>To-Do</h2>
        <ul id="task-list"></ul>
        <script>
          let tasks = [];
          let taskList = document.getElementById("task-list");
          
          function addTask(event) {
            event.preventDefault(); // Add this line
            let taskTitle = document.getElementById("task-title").value;
            let task = { title: taskTitle, id: Date.now() };
            tasks.push(task);
            displayTasks();
          }
          
          function removeTask(id) {
            let index = tasks.findIndex(task => task.id === id);
            tasks.splice(index, 1);
            displayTasks();
          }
          
          function displayTasks() {
            taskList.innerHTML = "";
            tasks.forEach(task => {
              let li = document.createElement("li");
              li.innerHTML = "<span>" + task.title + "</span>";
              let deleteButton = document.createElement("button");
              deleteButton.innerText = "Delete";
              deleteButton.onclick = () => {                
                removeTask(task.id);
              }
              li.appendChild(deleteButton);
              taskList.appendChild(li);
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