import { MODE_INDICATORS } from "./constants.js";

function convertToBinary(data, pad = 8) {
    return data.toString(2).padStart(pad, "0")
}

export class QrCode {
    /**
     * @type { Map<CorrectLevelError, CorrectionLevelType> }
     */
    #errorLevel;

    /**
     * @type { string }
     */
    #data;

    /**
     * @param { Map<CorrectLevelError, CorrectionLevelType> } errorLevel
     * @param { string } data
     */
    constructor(errorLevel, data) {
        this.#errorLevel = errorLevel;
        this.#data = data;
    }

    /**
     * @param {string} chars
     * @param {ModeIndicator} mode
     * @returns {string[]}
     */
    #generateBitsFromChars(chars, mode) {
        if (mode === "alpha"){}
        if (mode === "byte"){}
        if (mode === "numeric"){}
        if (mode === "kanji"){}

        const textEncoder = new TextEncoder();
        const encoded = textEncoder.encode(chars);
        return Array.from(encoded).map(byte =>
            byte.toString(2).padStart(8, "0")
        );
    }

    /**
     * @returns { string }
     */
    #getEncryptMode() {
        if (/[a-z]/.test(this.#data)) {
            return { value: MODE_INDICATORS.get("byte"), key: "byte"};
        }

        const numeric = /\d/g;
        const alpha = /[A-Z]|[0-9]/g;
        if (numeric.test(this.#data)) {
            if (alpha.test(this.#data)) {
                return { value: MODE_INDICATORS.get("alpha"), key: "alpha" };
            }
            return { value: MODE_INDICATORS.get("numeric"), key: "alpha" };
        }

        if (alpha.test(this.#data)) {
            return { value: MODE_INDICATORS.get("alpha"), key: "alpha" };
        }

        return { value: MODE_INDICATORS.get("kanji"), key: "kanji" };
    }

    build() {
        const mode = this.#getEncryptMode();
        const buff = this.#generateBitsFromChars(this.#data);
        const buffLength = buff.length;
        const data = buff.join("");

        console.log({
            mode,
            buff,
            buffLength,
            data
        });
    }
}

export class Encoder {
    /**
        * @type { string }
        */
    #data

    constructor(data) {
        this.#data = data
    }

    getChuncks(size) {
        const parts = []
        for (let i = 0; i < this.#data.length; i += size) {
            parts.push(this.#data.substring(i, i + size))
        }
        return parts
    }

    numeric() {
        const chunkSize = 3
        const chunks = this.getChuncks(chunkSize)
        const binaries = chunks.map(ch => {
            return convertToBinary(Number(ch), 10)
        })
        const joined = binaries.join("")
        console.log(binaries, joined, joined.length, convertToBinary(joined.length))
        return binaries.join("")
    }

    alphanumeric() {
        throw new Error("not implemented")
    }

    byte() {
        throw new Error("not implemented")
    }

    kanji() {
        throw new Error("not implemented")
    }
}
