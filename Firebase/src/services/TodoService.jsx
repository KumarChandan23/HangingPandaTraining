import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase/config";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

const todoCollection = collection(db,"todos");

export const addTodo =  async (task, imageFile) => {
    let imageURL = "";
    if(imageFile){
        const imageRef = ref(storage, `todos/${Date.now()}_${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
         imageURL = await getDownloadURL(imageRef);
    }
    const newTodo = {task, imageURL, createdAt: new Date()};
    await addDoc(todoCollection, newTodo);
}


export const getTodo = async () => {
    
  const snapshot = await getDocs(todoCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const updateTodo = async (id, updatedFields)=>{
    const todoDoc = doc(db,"todos",id);
    await updateDoc(todoDoc, updatedFields)
}

export const deleteTodo = async (id)=>{
    await deleteDoc(doc(db, "todos", id));
    window.location.reload();
}