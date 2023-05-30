import Head from 'next/head'
import { Main } from "src/components/Main"
import { useCallback } from 'react';

export default function Home() {

  const foo = "foo";

  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert(foo);
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
