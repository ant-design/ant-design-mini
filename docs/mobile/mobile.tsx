import React from "react";
import style from "./mobile.less"
export default ()=>{
    return (
        <>
        <div className={style.title}>
            Ant Design Mini
        </div>
        <div className={style.img}>
        <img src="https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg" alt="logo" width={'50%'}></img>
        </div>
        <div className={style.container}>
        <a className={style.demo} href="alipays://platformapi/startapp?appId=2021003121607088&nbupdate=syncforce">
            小程序 demo 预览
        </a>
        </div>

        <div className={style.docs}>
            <div>如果想查阅完整文档，请在 PC 端访问：<a href="https://mini.ant.design/">https://mini.ant.design/</a></div>
        </div>
        </>
    )
}