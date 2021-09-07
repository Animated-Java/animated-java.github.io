import { useContext, useState } from "react";
import styles from "./header.module.less";
import { ThemeContext, ThemeSelectToggle } from "./theme-select";
import { Logo } from "./logo";
import classnames from "classnames";
import Link from "next/link";
import { Sidebar } from "./sidebar";
import { useMedia } from "react-use";
import { navItems } from "../data/links";
export const Header = ({pageHint=""}) => {
  const { theme } = useContext(ThemeContext);
  const collapsed = useMedia("(max-width:700px)",false);
  return (
    <div className={classnames(styles.root, styles[theme])}>
      <div className={styles.title}>
        <Logo size={1}></Logo>
        <h1 className={styles.text}>
          Animated <strong>Java</strong>
        </h1>
      </div>
      <div className={styles.rightHand}>
        {!collapsed && (
          <div className={styles.nav}>
            {navItems.map((item) => (
              <div
                className={classnames({
                  [styles.navItem]: true,
                  [styles.selected]: item.href === pageHint,
                })}
                key={item.id}
              >
                <div className={styles.text}>
                  <Link href={item.href}>
                    <a>
                      <h2>{item.title}</h2>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={styles.theme}>
          <ThemeSelectToggle></ThemeSelectToggle>
        </div>
        {collapsed && (
          <div className={styles.sidebar}>
            <Sidebar>
              <div className={classnames(styles.menu, styles[theme])}>
                {navItems.map((item) => (
                  <div
                    className={classnames({
                      [styles.navItem]: true,
                      [styles.selected]: item.href === pageHint,
                    })}
                    key={item.id}
                  >
                    <div className={styles.text}>
                      <Link href={item.href}>
                        <a>
                          <h2>{item.title}</h2>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Sidebar>
          </div>
        )}
      </div>
    </div>
  );
};
