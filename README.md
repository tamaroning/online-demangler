# Online Demangler

Symbol demanlgler runs on your web blowser.
It only supports Rust symbols for now.

Visit https://online-demangler-iv5u2bxxb-tamaroning.vercel.app/

## Build

```bash
git clone <This repo>
cd online-demangler
cargo install wasm-pack
wasm-pack build ./rust
npm install
```

## Run

```bash
npm run dev
```
