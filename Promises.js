fetch("https://fakestoreapi.com/products")
  .then(response => {
    if(!response.ok) {
      throw new Error("Network response");
    }
    return response.json();
  }).then(data => console.log(data))
  .catch(error => console.log("error" , error));