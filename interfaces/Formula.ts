import { Timestamp } from "firebase/firestore";

export interface Formula{
    id:string;
    name: string;
    description: string;
    createdAt:Timestamp

}