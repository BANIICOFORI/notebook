import { legacy_createStore } from "redux";
import  NotesReducer  from "./Reducer/notesReducer";


let store = createStore(NotesReducer)

export default store;