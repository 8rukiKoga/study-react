import Head from 'next/head'
import { Main } from "src/components/Main"
import { useCallback, useEffect, useState } from 'react';

export default function Home() {

  const [count, setCount] = useState(1)

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);
  
  useEffect(() => {
      document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [])

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <h1>{count}</h1>
      <button onClick={handleClick} >
        ボタン
      </button>

      <Main page="index" />
    </>
  )
}
