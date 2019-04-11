import faker from 'faker';
import { add } from './list';


function fillShoppingCart() {
    for(let i=0; i < 21; i++) {
        const product = {
            name: faker.commerce.productName(),
            image: faker.random.image(),
            price: parseFloat(faker.commerce.price()),
            adjective: faker.commerce.productAdjective(),
            material: faker.commerce.productMaterial()
        };
        console.log(product.name);
        add(product);
    }
}

fillShoppingCart();