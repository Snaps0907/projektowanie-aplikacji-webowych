export class Notes {
    //for pinned elements
    changeOrder(){
        let pinnedNotes : NodeListOf<HTMLDivElement> = document.querySelectorAll(".pinned")
        let allNotes : NodeListOf<HTMLDivElement>  = document.querySelectorAll("div:not(.pinned)")
        let numerOforder = allNotes.length + pinnedNotes.length
        for (let i = 0; i < allNotes.length; i++) {
            let number = numerOforder - i;
            allNotes[i].style.order = number.toString();
            
        }
        for (let i = 0; i < pinnedNotes.length; i++) {
            let number = pinnedNotes.length - i;
            pinnedNotes[i].style.order = number.toString();
            
        }
    }
}