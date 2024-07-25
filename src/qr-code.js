import { MODE_INDICATORS, CORRECTION_LEVEL } from "./constants.js";

export class QrCode {
    /**
     * @type { CorrectLevelError }
     */
    #correctionLevelError;

    /**
     * @type { string }
     */
    #data;

    /**
        * @type { number[][] }
        */
    #grid

    /**
     * @param { CorrectLevelError } errorLevel
     * @param { string } data
     */
    constructor(correctionLevelError, data) {
        this.#correctionLevelError = correctionLevelError;
        this.#data = data;
        this.#grid = []
    }


    /**
     * @returns { CorrectionLevelType }
     */
    #getErrorCorrection() {
        return CORRECTION_LEVEL.get(this.#correctionLevelError);
    }

    /**
     * @param {string} chars
     * @param {ModeIndicator} mode
     * @returns {string[]}
     */
    #generateBitsFromChars(chars, mode) {
        if (mode === "alpha") {
        }
        if (mode === "byte") {
        }
        if (mode === "numeric") {
        }
        if (mode === "kanji") {
        }

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
            return { value: MODE_INDICATORS.get("byte"), key: "byte" };
        }

        const numeric = /\d/g;
        const alpha = /[A-Z]|[0-9]/g;
        if (numeric.test(this.#data)) {
            if (alpha.test(this.#data)) {
                return { value: MODE_INDICATORS.get("alpha"), key: "alpha" };
            }
            return { value: MODE_INDICATORS.get("numeric"), key: "numeric" };
        }

        if (alpha.test(this.#data)) {
            return { value: MODE_INDICATORS.get("alpha"), key: "alpha" };
        }

        return { value: MODE_INDICATORS.get("kanji"), key: "kanji" };
    }

    /**
     * @param { number } size
     */
    version() {
        // todo: get the real size for calculating the version
        const v = 1
        const formule = v => {
            return 17 + v * 4;
        };

        return formule(size);
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

    // patterns
    #finderPattern() {
        const squareSize = 7
        const gridRowSize = this.#grid[0].length - 1
        const gridColSize = this.#grid.length - 1

        const squaresPoints = [
            {
                topLeft: [0,0],
                topRight: [squareSize, 0],
                bottomLeft: [0, squareSize],
                bottomRight: [squareSize, squareSize]
            },
            {
                topLeft: [gridRowSize - squareSize, 0],
                topRight: [gridRowSize, 0],
                bottomLeft: [gridRowSize - squareSize, squareSize],
                bottomRight: [gridRowSize, squareSize]
            },
            {
                topLeft: [0, gridColSize - squareSize],
                topRight: [squareSize, gridColSize - squareSize],
                bottomLeft: [0, gridColSize],
                bottomRight: [squareSize, gridColSize]
            }
        ]
        // todo: this will be implemented on the grid
        return squaresPoints
    }

    #darkModule() {
        const value = 4 * this.version() + 10
        return this.#grid[9][value]
    }

    #timingPattern() {}

    #alingPattern() {
        if (this.version() === 1) {
            return
        }
        const size = this.#grid.length
        const n = (size * size) - 3
        return n
    }
}
