import Image from 'next/image'
import styles from '@/app/page.module.css'
import React from 'react';
import { rust_demangle } from 'rustc-demangle';

export default function Home() {
  const [mangledInput, setMangledInput] = React.useState<string>('');

  return (
    <>
      {/*<main className={styles.main}>*/}
      <h1>
        Online Rustc Demangler
      </h1 >

      <div>
        <label>
          Mangled Symbol:
        </label>
        <textarea name={mangledInput} onChange={(e) => { setMangledInput(e.target.value); }} />
      </div>
      <div>
        <label>
          Demangled Symbol: {rust_demangle(mangledInput)}
        </label>
      </div>
      {/*</main>*/}
    </>
  )
}
