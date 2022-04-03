import Head from "next/head";
import styles from "./index.module.scss";
import { Main } from "../components/main";
import { Banner } from "../components/banner";
import React, { useState } from "react";
import { useEffectOnce } from "react-use";
import { DiscordSocial, GithubSocial } from "../components/social";

export default function Home() {
  const [memberCount, setMemberCount] = useState("100+");
  useEffectOnce(() => {
    fetch("/api/discord/guild")
      .then((res) => res.json())
      .then((json) => {
        setMemberCount(String(json.members));
      });
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Animated Java - Home</title>
        <meta name="description" content="Animated-Java" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Banner />
        <div className={styles.content}>
          <h1>Animated Java</h1>
          <div className={styles.pill}></div>
          <div className={styles.stats}>
            <h2>Discord: {memberCount} members</h2>
          </div>
          <div>
            <h3>
              This site is work in progress, in the mean time you are welcome to
              ask questions in the discord{" "}
              <a
                href="https://discord.gg/eky7mggzH6"
                style={{ color: "lightblue" }}
              >
                here
              </a>
            </h3>
          </div>
        </div>
        {/* <div>
          <h2>Join the Community</h2>
          <p>
            Join over 100 developers around the world to share and build
            animations together. Enjoy the world’s fastest growing open-source
            Blockbench plugin community with over 1000 animations and growing.
            Come join us.
          </p>

          <div>
            <DiscordSocial></DiscordSocial>
            <GithubSocial></GithubSocial>
          </div>
        </div> */}
      </Main>
    </div>
  );
}
