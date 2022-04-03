import { useContext, useEffect, useRef, useState } from "react"
import styles from "./sidebar.module.scss";
import classNames from "classnames";
import { Portal } from "./portal";
import { ThemeContext } from "./theme-select";


export function Sidebar({children}){
    const {theme} = useContext(ThemeContext);
    const [visible,setVisible] = useState(false);
    const shield = useRef();
    useEffect(()=>{
        if(visible){
            document.body.style.overflowY = "hidden";
        }else{
            document.body.style.overflowY = null;
        }
    },[visible])
    return <>
        <button className={classNames(styles.button,visible?styles.open:styles.closed,styles[theme])} onClick={()=>{
            setVisible((vis)=>!vis)
        }}>
            <div></div>
            <div></div>
            <div></div>
        </button>
        {visible && <Portal>
            <div className={styles.overlay} onClick={(e)=>{
                if(e.target === shield.current) setVisible(false);
            }} ref={shield}>
                <div className={classNames(styles.overlayContent,styles[theme])} onClick={(e)=>{
                    e.preventDefault();
                }}>
                    {children}
                </div>
            </div>
        </Portal>}
    </>
}