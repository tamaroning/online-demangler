use rustc_demangle;
use wasm_bindgen::prelude::*;


#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn rust_demangle(s: &str) -> String {
    rustc_demangle::demangle(s).to_string()
}
