
let pdisplay = document.querySelector("#pdisplay");
let pname = document.querySelector("#pname");
let pdescription = document.querySelector("#pdescription");
let price = document.querySelector("#price")




let item = () => {
    fetch('https://fakestoreapi.com/products')      .then(response => {
     return response.json()
            })
            .then(data => {
       console.log(data)
       console.log(data[0].title)
    console.log(data[1].title)
     pdisplay.innnerText = data[1].image;
      pdescription.innerText = data[1].description;
     pname .innerText = data[0].category;
    price.innerText =data[1].price;
              
            });
}
item()

































// let item = {} => {
//     fetch ("https://fakestoreapi.com/products")
//     .then ( response =>{
//         return response.json()
//     })
// }
// .then(data =>{
//     console.log(data)
// });