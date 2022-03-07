const fs = require("fs")
export function getConentByPath(filePath:string){
    try{
        const content = fs.readFileSync(filePath, 'utf-8') as string
        return content
    }catch(err){
        // console.log(filePath, err)
    }
}

export function writeContentByPath(filePath:string, content:string){
    console.log(content)
    fs.writeFileSync(`${filePath}`, content)
}