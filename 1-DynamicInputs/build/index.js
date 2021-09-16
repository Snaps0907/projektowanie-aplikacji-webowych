class App {
    constructor() {
        this.StartApp();
    }
    StartApp() {
        this.GetInputs();
        this.WatchInputs();
        this.CalcInputs();
    }
    GetInputs() {
        this.dataDynamicInput = document.querySelector("#dynamic");
        this.box = document.querySelector(".dynamic-inputs");
        this.showbox = document.querySelector(".show-dynamic--inputs");
    }
    WatchInputs() {
        this.dataDynamicInput.addEventListener("input", () => this.GetDate());
    }
    GetDate() {
        const data1 = +this.dataDynamicInput.value;
        this.CreateElement(data1);
    }
    CreateElement(e) {
        for (let i = 0; i < e; i++) {
            const divElement = document.createElement("div"), inputElement = document.createElement("input"), buttonElement = document.createElement("button"), labelElement = document.createElement("label");
            divElement.id = "data" + i;
            inputElement.classList.add("input-data");
            labelElement.innerHTML = "Field:" + i;
            buttonElement.innerText = "Remove";
            this.box.appendChild(divElement);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            inputElement.addEventListener("input", () => this.ShowData(inputElement.value));
            buttonElement.addEventListener("click", () => this.RemoveElement(i));
        }
        if (e == 0) {
            let elements = document.querySelectorAll(".dynamic-inputs > div");
            elements.forEach(element => {
                element.parentNode.removeChild(element);
            });
        }
    }
    RemoveElement(e) {
        const element = document.querySelector("#data" + e);
        element.parentNode.removeChild(element);
    }
    CalcInputs() {
        const sumInput = document.createElement("input"), sumLabel = document.createElement("label"), avgInput = document.createElement("input"), avgLabel = document.createElement("label"), minInput = document.createElement("input"), minLabel = document.createElement("label"), maxInput = document.createElement("input"), maxLabel = document.createElement("label");
        sumLabel.innerHTML = "Sum:";
        avgLabel.innerHTML = "Avg:";
        minLabel.innerHTML = "Min:";
        maxLabel.innerHTML = "Max:";
        sumInput.id = "sum";
        avgInput.id = "avg";
        minInput.id = "min";
        maxInput.id = "max";
        this.showbox.appendChild(sumLabel);
        this.showbox.appendChild(sumInput);
        this.showbox.appendChild(avgLabel);
        this.showbox.appendChild(avgInput);
        this.showbox.appendChild(minLabel);
        this.showbox.appendChild(minInput);
        this.showbox.appendChild(maxLabel);
        this.showbox.appendChild(maxInput);
    }
    ShowData(e) {
        let inputList = document.querySelectorAll(".input-data");
        let numberList = [];
        inputList.forEach(element => {
            numberList.push(+element.value);
        });
        const min = Math.min(...numberList);
        const max = Math.max(...numberList);
        const avg = numberList.reduce((a, b) => a + b, 0) / numberList.length;
        const sum = numberList.reduce((a, b) => a + b, 0);
        const text = "Only numbers";
        this.sumData = document.querySelector("#sum");
        this.avgData = document.querySelector("#avg");
        this.minData = document.querySelector("#min");
        this.maxData = document.querySelector("#max");
        if (isNaN(e)) {
            this.sumData.value = text;
            this.avgData.value = text;
            this.minData.value = text;
            this.maxData.value = text;
        }
        else {
            this.sumData.value = sum.toString();
            this.avgData.value = avg.toString();
            this.minData.value = min.toString();
            this.maxData.value = max.toString();
        }
    }
}
let app = new App();
