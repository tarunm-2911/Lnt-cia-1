fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(response => response.json())
  .then(user => console.log(user.phone))
  .catch(error => console.error("Error fetching user:", error.message));
