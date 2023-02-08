import fs from 'fs'

class Product {
    public readonly id: string;
    public readonly name: string;
    public readonly price: number;

    private jsonPath = "C:\\Users\\Krishna\\Desktop\\appleute\\api\\src\\Utils\\DummyProduct.json";

    public getAll(): Product[] {
        const productData = JSON.parse(fs.readFileSync(this.jsonPath, 'utf-8'))
        return productData.products;
    }
}

export default Product;