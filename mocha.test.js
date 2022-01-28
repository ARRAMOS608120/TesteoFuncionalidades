const {strictEqual, notDeepStrictEqual } = require('assert')
const axios = require('axios')

const endpoint = "http://localhost:8080/api/productos"

describe("Comprobando el post y get de productos", function() {
     before(function() {
        console.log('********* Comienzo TOTAL de Test *********')
    })

    after(function() {
        console.log('********* Fin TOTAL de Test *********')
    })

    it("deberia guardar el producto designado en el arreglo y no deberia machear el objeto por tener 'id' una vez creado", async function(){

        await axios.post(endpoint, {
                                        title: "test",
                                        price: "11",
                                        thumbnail: "imagen1"
                                    })
        const response = await axios.get(endpoint)
        const prods = response.data

        let addOk = false;
        let prod;
        prods.forEach(element => {
            if (element.nombre == "test") {
                addOk = true;
                prod = element;
            }
        });

        strictEqual(addOk, true)
        notDeepStrictEqual(prod, [
            {
                title: "test",
                price: "11",
                thumbnail: "imagen1"
            }
        ])

    })

})