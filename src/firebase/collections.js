import { collection } from "firebase/firestore";
import { db } from "./firebase"

export const videoCollectionRef =  collection(db, "videos")