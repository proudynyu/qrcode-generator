// lookup tables
const gf_exp = new Array(512)
const gf_log = new Array(256)
let isGaloisFieldInitiated = false

export function initGaloisField() {
    let x = 1
    for (let i = 0; i < 255; i++) {
        gf_exp[i] = x
        gf_log[x] = i

        // shift 1
        x <<= 1

        if (x & 0x100) {
            x ^= 0x11D
        }
    }
    for (let i = 255; i < 512; i++) {
        gf_exp[i] = gf_exp[i - 255]
    }
    isGaloisFieldInitiated = true
}

export function gf_mult(a, b) {
    if (a === 0 || b === 0) return 0;
    return gf_exp[gf_log[a] + gf_log[b]]
}

export function gf_div(a, b) {
    if (a === 0) return 0;
    if (b === 0) throw new Error("Cannot divide by zero");
    return gf_exp[(gf_log[a] - gf_log[b] + 255) % 255]
}

export function polyMult(p1, p2) {
    const result = new Array(p1.length + p2.length - 1).fill(0)
    for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
            result[i + j] ^= gf_mult(p1[i], p2[j])
        }
    }
    return result
}

export function generatorPolynominal(errCodewords) {
    if(!isGaloisFieldInitiated) throw new Error("Galois field must be initialized before proceeding")
    let g = [1];
    for (let i = 0; i < errCodewords; i++) {
        g = polyMult(g, [1, gf_exp[i]])
    }
    return g
}


/**
    * n -> the total number of codewords (data + error correction)
    * k -> the number of data codewords in each block
    * q -> the size of Galois Field (GF), normally q = 256 -> 2^8, codeword of 8bits
    */
export function reedSolomonCorrection(n, k) {
    const errorCorrectionWords = n - k

    initGaloisField()
    const generator = generatorPolynominal()
}

