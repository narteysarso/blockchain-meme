
export default function readFileAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {

        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);

        reader.onloadend = () => {
            resolve(reader.result);
        }
        reader.onerror = () => {
           reject(reader.error.message);
        }
    })
}