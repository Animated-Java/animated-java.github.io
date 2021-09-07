import {getKeyFactoryFor} from "../util/getKeyFor";
import { useState } from "react";
import styles from "./support-us.module.less";
import { LINKS } from "../data/links";
import { useEffectOnce, useMedia } from "react-use";
import classnames from "classnames";
const getKeyFor = getKeyFactoryFor("SupportUs");
const LS_KEY_CLOSED = getKeyFor("closed");
export function SupportUs({ visible }) {
  const [isVisible, setIsVisible] = useState(visible);
  const [isFirstRender,setIsFirstRender] = useState(true);
  useEffectOnce(()=>{
      if(localStorage.getItem(LS_KEY_CLOSED)==="yes"){
          setIsVisible(false);
      }
      setIsFirstRender(false);
  })
  const isMedium = useMedia("(min-width:600px)",true);
  const isLarge = useMedia("(min-width:850px)",true);
  
  if(!isVisible)return null;// do not render the component if it is not visible.
  
  const size = styles["size_"+(isFirstRender?2:(isMedium+isLarge))];
  const close = ()=>{
      setIsVisible(false);
      localStorage.setItem(LS_KEY_CLOSED,"yes");
  }
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={classnames(styles.text,size)}>
          <a className={size} href={LINKS.patreon} target="_blank" rel="noreferrer">
            <div className={styles.ico}>💌</div>
            <div className={styles.textContent}>
            <p className={styles.textContentEx}>Animated Java accepts donations from exceptional people such as yourself.</p>
            <p className={styles.link}>Support our team ›</p>
            </div>
          </a>
        </div>
        <div className={classnames(styles.dismiss,size)}>
          <button className={styles.content} onClick={close}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.307989 0.308021C0.71864 -0.102633 1.38444 -0.102633 1.79509 0.308021L13.6919 12.2049C14.1026 12.6156 14.1026 13.2814 13.6919 13.692C13.2812 14.1027 12.6155 14.1027 12.2048 13.692L0.307989 1.79513C-0.102663 1.38448 -0.102663 0.718675 0.307989 0.308021Z"
                  fill="white"
                />
                <path
                  d="M13.692 0.30799C14.1027 0.718644 14.1027 1.38445 13.692 1.7951L1.7952 13.692C1.38455 14.1026 0.718751 14.1026 0.3081 13.692C-0.102552 13.2813 -0.102552 12.6155 0.3081 12.2049L12.2049 0.307991C12.6156 -0.102663 13.2814 -0.102664 13.692 0.30799Z"
                  fill="white"
                />
              </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
