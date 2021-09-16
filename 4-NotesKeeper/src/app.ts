import { Note } from './note'
import { Notes } from "./notes"
import { AppStorage } from './appStorage';
import firebase from "firebase"
import { firebaseConfig } from "./config"
const noteElement = new Note();
const notes = new Notes();

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore();

export class App {
    btnAdd: HTMLButtonElement;
    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    selectorInput: HTMLSelectElement;
    data: string;
    addedData: string;


    constructor() {
        this.getInput();
        this.getNotes()
    }

    async getNotes() {
        const col = await db.collection('notes').get();
        let data = col.docs.map(doc => doc.data());
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            noteElement.createBox(element, element.baseID)
        }
    }

    getInput() {
        this.btnAdd = document.querySelector(".btn-add")
        this.titleInput = document.querySelector("#titleInput");
        this.descriptionInput = document.querySelector("#descriptionInput");
        this.selectorInput = document.querySelector("#color");
        const now = new Date();
        this.addedData = `${now.getHours()}:${now.getMinutes()} ${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`
        this.btnAdd.addEventListener("click", () => this.showData());
    }

    showData() {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const color = this.selectorInput.value;
        const date = this.addedData;
        const appStorage = new AppStorage(title, description, color, date)
        notes.changeOrder();
    }

}
