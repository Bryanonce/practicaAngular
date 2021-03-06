export function toBase64(file:File):Promise<string>{
    return new Promise((resolve,reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=> resolve(String(reader.result));
        reader.onerror = ()=> reject(String(reader.error));
    })
}