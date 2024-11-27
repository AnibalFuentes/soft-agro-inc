import { Timestamp } from "firebase/firestore";
import { Product } from "./Producto";

export interface Orden {
  id: string;
  products: Product[];
  createdAt: Timestamp;
}
