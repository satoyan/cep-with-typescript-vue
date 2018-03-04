class Main {
    constructor(public name: string) {
    }

    hello() {
        alert(`Hello ${this.name}!!`);
    }
}

const button = document.querySelector('#buttonGreet') as HTMLButtonElement;
button.onclick = () => {
    const textName = document.querySelector('#textName') as HTMLInputElement;
    const m = new Main(textName.value);
    m.hello();
}
