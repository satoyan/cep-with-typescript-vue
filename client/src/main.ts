import CSIHelper from "../lib/csi_helper";

class Main {
    constructor(public name: string) {
    }

    hello() {
        const csi = new CSInterface();
        csi.evalScript(`hello("${this.name}")`, (result: string) => {
            console.log("reuslt", result);
        });
    }
}

const button = document.querySelector('#buttonGreet') as HTMLButtonElement;
button.onclick = () => {
    const textName = document.querySelector('#textName') as HTMLInputElement;
    const m = new Main(textName.value);
    m.hello();
}

const buttonOpenFolder = document.querySelector('#buttonOpenFolder') as HTMLButtonElement;
buttonOpenFolder.onclick = async () => {
    const result = await CSIHelper.eval(`openFolder()`)
    console.log(result);
    alert(result);
}
