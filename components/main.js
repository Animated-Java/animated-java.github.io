import { Footer } from "./footer"
import { Header } from "./header"
import { SupportUs } from "./support-us"
import { ThemeContext, ThemeProvider, ThemeSelectToggle } from "./theme-select"
import styles from "./main.module.scss";
import React, { useContext } from "react";
import classNames from "classnames";

const MainContent = React.memo(({children,minimal,pageHint})=>{
    const {theme} = useContext(ThemeContext);
    return <>
        <SupportUs></SupportUs>
        <Header pageHint={pageHint}></Header>
        <div className={classNames(styles.main,styles[theme])}>
            {children}
        </div>
        <Footer minimal={minimal}></Footer>
    </>
})
export function Main({children,minimal=false,pageHint=""}){
    return <ThemeProvider>
        <MainContent minimal={minimal} pageHint={pageHint}>{children}</MainContent>
    </ThemeProvider>
}