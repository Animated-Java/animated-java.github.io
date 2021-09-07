import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export function Portal({children,target}){
    const [portal,setPortal] = useState(null);
    useEffect(()=>{
        const mount = document.createElement("div");
        mount.setAttribute("data-portal","true")
        setPortal(createPortal(<>{children}</>,mount));
        let inside = target;
        if(!inside) inside = document.body;
        inside.appendChild(mount);
        return ()=>{
            mount.remove();
            setPortal(null);
        }
    },[children,target]);
    return portal;
}