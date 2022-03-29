Page({
    getRef(ins){
        this.reset = ins.setItemPosition
        console.log(this.reset)
    },
    resetPosition(){
        this.reset(0)
    }
})