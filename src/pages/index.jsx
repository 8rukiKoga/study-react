import Head from 'next/head'
import { Main } from "src/components/Main"
import { useCallback, useEffect } from 'react';

export default function Home() {

  const foo = "foo";

  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert(foo);
  }, [])
  
  useEffect(() => {
      console.log("マウント時");
      document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, [])

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <a
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </a>

      <Main page="index" />
    </>
  )
}
