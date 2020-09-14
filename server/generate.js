
var faker = require('faker');

var database = { product : []};

for(var i = 1 ; i<=100; i++){
    database.product.push({
        id : i,
        name: faker.commerce.productName(),
        precio : faker.commerce.price(),
    })

}

console.log(JSON.stringify(database));