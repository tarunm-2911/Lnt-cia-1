fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => console.log(user.name))
  .catch(error => console.error("Error fetching user:", error.message));
