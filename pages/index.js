import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.less'
import { Main } from '../components/main';
import { Banner } from '../components/banner';
import dynamic from "next/dynamic";
import { useState } from 'react';
import { useEffectOnce } from 'react-use';
export default function Home() {
  const [memberCount,setMemberCount] = useState("100+");
  useEffectOnce(()=>{
    fetch("/api/discord/guild").then(res=>res.json()).then(json=>{
      setMemberCount(String(json.members));
    });
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Animated Java - Home</title>
        <meta name="description" content="Animated-Java" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>Discord: {memberCount} members</h1>
      </Main>
    </div>
  )
}
console.log(process.env.DISCORD_BOT_TOKEN);