import Image from "next/image";
import styles from "./page.module.css";
// import Head from "next/head";

export default function Home() {
  console.log('Home page 실행');
  return (
    <>      
      <h2>Welcome</h2>
      <p>Hello Web!</p>
      <Image src="/home.png" alt="" width={48} height={48}/>
    </>
  );
}