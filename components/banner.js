import styles from "./banner.module.scss";
// import SplashImage from "../assets/splash.png";
// import Image from "next/image"
import { useMedia } from "react-use";
import classNames from "classnames";
export function Banner() {
  const small = useMedia("(max-width:500px)",false);
  const med = useMedia("(max-width:1000px)",false) && !small;
  const large = useMedia("(min-width:1000px)",true) && !med;
  return (
      <div className={styles.root}>
        <div className={classNames(styles.content,large && styles.large,med&&styles.medium,small&&styles.small)}>
            {/* <Image src={SplashImage} alt={"splash"} width={globalThis && globalThis.window && globalThis.window?.innerWidth||100}></Image> */}
            <div className={styles.image}></div>
            <div className={styles.gradient}></div>
        </div>
      </div>
    );
}