
class ProductManager {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        
        const verificar = this.products.some(product => product.code === code);

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

let productito = new ProductManager();
productito.addProduct("coca", "asdasdasd", 1000, ".jpg", "1212", "100");
console.log(productito.getProducts(1));
console.log(productito.getProductById(1));
