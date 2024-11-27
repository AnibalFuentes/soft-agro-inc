import { Timestamp } from "firebase/firestore";
import { Unidad } from "./Unidades";

export interface Product {
  name: string;
  description: string;
  stock: number;
  price: number;
  size?: number;
  unidad?: Unidad;
  insumos?: Product[];
  createAt: Timestamp;
}
