import { ERROR_CORRECTION, MODE_INDICATORS, VERSION_BYTE } from "./constants.js";

export class QrCode {
    /**
     * @type { string }
     */
    #data

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
        const errorLevel = "L";
        const mode = this.#getEncryptMode();
        const buff = this.#generateBitsFromChars(this.#data);
        const buffLength = buff.length;
        const charactercount = buffLength < 8 ? 8 : 16;
        const dataBits = this.#data.length * 8;
        const sum = (mode.value + dataBits + charactercount) / 8;

        let version = undefined;
        for (let v of VERSION_BYTE.versions) {
            if (sum <= v[errorLevel]) {
                version = v;
            }
        }
        
        if (!version) {
            throw new Error("need to implement the rest of the version table or value cannot be used in byte mode");
        }

        const modeBits = Number(mode.value).toString(2).padStart(4, "0");
        const characterCountBits = Number(charactercount).toString(2).padStart(8, "0");

        buff.unshift(characterCountBits);
        buff.unshift(modeBits);

        const terminator = "0000";
        buff.push(terminator);

        if(buff.length % 8 !== 0) {
            const rest = buff.length % 8;
            const misses = 8 - rest;

            for (let i = 0; i < misses; i++) buff.push("0");
        }

        const errorCorrection = ERROR_CORRECTION[version.version - 1]
        if (!errorCorrection) {
            throw new Error("Was not possible to get an error correction")
        }

        const {ec_codewords_per_block, blocks} = errorCorrection[errorLevel]

        const n = buff.length
        const k = this.#data.length

        console.log({
            buff,
            l: buff.length,
            version,
            modeBits, characterCountBits
        });
    }
}
