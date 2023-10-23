
class ProductManager {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        
        const verificar = this.products.some(product => product.code === code);

        if (verificar || !title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los datos son obligatorios y no deben repetirse");
        }


        const newProduct = {
            id: this.nextProductId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        this.nextProductId++;
        
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.log("Producto no encontrado");
        }
        return product;
    };
}

const productito = new ProductManager();
productito.addProduct("coca", "gaseosa", 1000, ".jpg", "1212", "100");
console.log(productito.getProducts(1));
console.log(productito.getProductById(1));

console.log("Todos los productos:", productito.getProducts());


const productById = productito.getProductById(1);
console.log("Producto por ID:", productById);

const nonExistentProduct = productito.getProductById(1);

if (nonExistentProduct === null) {
    console.error("Producto no encontrado");
}