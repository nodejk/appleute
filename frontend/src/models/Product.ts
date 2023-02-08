import { ProductCategoryEnum } from '../enums/ProductCategoryEnum';

export interface Product {
    id: string;
    name: string;
    price: number;
    category: ProductCategoryEnum;
}
