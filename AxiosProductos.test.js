const axios = require('axios')

const endpoint = "http://localhost:8080/api/productos"

function getProducts() {
    return axios.get(endpoint)
}

function addProduct() {
    axios.post(endpoint, {
        title: "test",
        price: "11",
        thumbnail: "imagen1"
    })
    .then(() => {
       return getProducts()
    })
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
} 

/* Llamamos a la funcion de axios y verificamos
que se agregue el producto y se liste */
addProduct();