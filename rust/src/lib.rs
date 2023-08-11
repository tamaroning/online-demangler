use rustc_demangle;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn rust_demangle(s: &str) -> String {
    rustc_demangle::demangle(s).to_string()
}
