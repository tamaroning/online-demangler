import * as wasm from "./rustc_demangle_bg.wasm";
import { __wbg_set_wasm } from "./rustc_demangle_bg.js";
__wbg_set_wasm(wasm);
export * from "./rustc_demangle_bg.js";
