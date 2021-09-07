import styles from "./logo.module.less";
import Image from "next/image";
import logoImage from "../assets/gif/animated_java_armor_stand_running_right.gif";
const aspectRatio = 24.43 / 14.5;
export const Logo = () => {
  return (
    <div
      className={styles.logo}
      style={{
        "--size":1
      }}
    >
        <div className={styles.wrapper}>
            <Image
                src={logoImage}
                alt={"Animated Java Logo"}
                width={34 * aspectRatio}
                height={34}
            ></Image>
        </div>
    </div>
  );
};
//24.43 x 14.5
