import {
    ERROR_CORRECTION,
    MODE_INDICATORS,
    VERSION_BYTE
} from "./constants.js";
import { reedSolomonCorrection } from "./reed-solomon.js"

export class QrCode {
    /**
     * @type { string }
     */
    #data;

    /**
     * @param { string } data
     */
    constructor(data) {
        this.#data = data;
    }

    /**
     * @param {string} chars
     * @param {number} pad
     * @returns {string[]}
     */
    #generateBitsFromChars(chars) {
        const textEncoder = new TextEncoder();
        const encoded = textEncoder.encode(chars);
        return Array.from(encoded).map(byte =>
            byte.toString(2).padStart(8, "0")
        );
    }

    // hard coded for byte mode
    #getEncryptMode() {
        return { value: MODE_INDICATORS.get("byte"), key: "byte" };
    }

    build() {
        // Error correction level chosen was L (not interested on the losing data)
        // to get the mode, i'm using just the byte mode for now, but is possible to find the mode using alpha, numeric, kanji and byte
        // to get the version, it is necessary to determine the lenght of bits to be stored. With a simple example:
        // "HELLO CC WORLD" has 14 length times 8 (14 bytes * 8 for bits) => 124 bits + 4 bits (mode) + 8 bits (character count for byte mode is 8)
        // 136 / 8 (to find byte) => 17 bytes to be stored
        const errorLevel = "L";
        const mode = this.#getEncryptMode();
        const buff = this.#generateBitsFromChars(this.#data);
        const buffLength = buff.length;
        const requiredBytes = buffLength * 8;

        let charactercount = buffLength < 8 ? 8 : 16;
        const totalBits = (mode.value + requiredBytes + charactercount) / 8;
        let version = undefined;
        for (let v of VERSION_BYTE.versions) {
            if (totalBits <= v[errorLevel]) {
                version = v;
                break;
            }
        }

        if (!version) {
            throw new Error(
                "need to implement the rest of the version table or value cannot be used in byte mode"
            );
        }

        const modeBits = Number(mode.value)
            .toString(2)
            .padStart(4, "0");
        const characterCountBits = Number(charactercount)
            .toString(2)
            .padStart(8, "0");

        buff.unshift(characterCountBits);
        buff.unshift(modeBits);
        if (buff.length % 8 !== 0) {
            const rest = buff.length % 8;
            const misses = 8 - rest;

            for (let i = 0; i < misses; i++) buff.push("0");
        }
        const totalDataBits = version[errorLevel]
        while (buff.length < totalDataBits) {
            buff.push("11101100");
            if (buff.length < totalDataBits) {
                buff.push("00010001");
            }
        }

        const errorCorrection = ERROR_CORRECTION[version.version - 1];
        if (!errorCorrection) {
            throw new Error("Was not possible to get an error correction");
        }

        const { totalCodewords, errorCorrectionLevels } = errorCorrection
        const n = totalCodewords
        const k = errorCorrectionLevels[errorLevel].dataCodewords

        // const r = reedSolomonCorrection(n, k)

        console.log({
            n,
            k,
            errorCorrection,
            buff,
            l: buff.length,
            version,
            modeBits,
            characterCountBits
        });
    }
}
