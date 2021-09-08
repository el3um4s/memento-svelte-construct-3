import cs from "../Stores/CustomStore";

export default function initializeCustomSvelte() {
    if (!!!globalThis.customSvelte)  { 
        globalThis.customSvelte = { };
    };

    globalThis.customSvelte.cs = cs;
    globalThis.customSvelte.print = print;
}

function print(test: string = "Hello World!"):void {
    console.log(`PRINT TEST ${Math.round(Math.random()*100)} - ${test}`)
}