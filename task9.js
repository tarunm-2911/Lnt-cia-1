fetch("https://jsonplaceholder.typicode.com/users/4")
  .then(response => response.json())
  .then(user => {
    console.log(user.company.name);
    console.log(user.website);
  })
  .catch(error => console.error("Error fetching user:", error.message));
