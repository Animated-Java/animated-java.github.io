import { Footer } from "./footer"
import { Header } from "./header"
import { SupportUs } from "./support-us"
import { ThemeProvider, ThemeSelectToggle } from "./theme-select"
import styles from "./main.module.less";
export function Main({children,minimal=false,pageHint=""}){
    //return a div with class main
    return <ThemeProvider>
        <SupportUs></SupportUs>
        <Header pageHint={pageHint}></Header>
        <div className={styles.main}>
            {children}
        </div>
        <Footer minimal={minimal}></Footer>
    </ThemeProvider>
}