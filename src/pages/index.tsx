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
        Online Rust Demangler
      </h1 >
      <a href="https://github.com/tamaroning/online-demangler">GitHub</a>
      <div>
        <label>
          Input Symbol
        </label>
      </div>
      <div>
        <textarea name={mangledInput} onChange={(e) => { setMangledInput(e.target.value); }} placeholder='_RNvNtCs1234_7mycrate3foo3bar' />
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
