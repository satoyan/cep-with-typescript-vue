/// <reference types="types-for-adobe/AfterEffects/2018" />

class Main {
    static hello(name: string) {
        const message = `Hello ${name}!\r\n BuildName - ${app.buildName}`;

        alert(message);
    }

    static openFolder(path?: string) {
        const folder = new Folder(path || '~');
        let file: File;

        try {
            file = new File('~/tmp.bat');
            file.open('w');
            try {
                file.write(`start ${folder.fsName}`)
                return file.execute() ? "Success" : "Fail";
            } finally {
                file.close();
            }
        } catch (ex) {
            return ex;
        }
    }
}

$.global.hello = Main.hello;
$.global.openFolder = Main.openFolder;
