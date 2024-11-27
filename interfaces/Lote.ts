import { Product } from "./Producto";

export interface Lote{
    id: string;
    name:string;
    products:Product[]
}