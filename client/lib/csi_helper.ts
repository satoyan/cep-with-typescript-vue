export default class CSIHelper {
    static _csi = new CSInterface();

    public static eval(script: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            try {
                this._csi.evalScript(script, (result: string) => {
                    resolve(result);
                })
            } catch (ex) {
                reject(ex);
            }
        });
    }
}
