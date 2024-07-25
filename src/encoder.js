import { convertToBinary } from "./utils.js";

export class Encoder {
    /**
     * @type { string }
     */
    #data;

    constructor(data) {
        this.#data = data;
    }

    getChuncks(size) {
        const parts = [];
        for (let i = 0; i < this.#data.length; i += size) {
            parts.push(this.#data.substring(i, i + size));
        }
        return parts;
    }

    numeric() {
        const chunkSize = 3;
        const chunks = this.getChuncks(chunkSize);
        const binaries = chunks.map(ch => {
            return convertToBinary(Number(ch), 10);
        });
        const joined = binaries.join("");
        console.log(
            binaries,
            joined,
            joined.length,
            convertToBinary(joined.length)
        );
        return binaries.join("");
    }

    alphanumeric() {
        throw new Error("not implemented");
    }

    byte() {
        throw new Error("not implemented");
    }

    kanji() {
        throw new Error("not implemented");
    }
}
