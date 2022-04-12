const fs = require("fs")
export function getContentByPath(filePath:string){
    try{
        const content = fs.readFileSync(filePath, 'utf-8') as string
        return content
    }catch(err){
        // console.log(filePath, err)
    }
}

export function writeContentByPath(filePath:string, content:string){
    fs.writeFileSync(`${filePath}`, content)
}