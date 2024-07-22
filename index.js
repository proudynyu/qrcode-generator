import {CORRECTION_LEVEL} from "./src/constants.js"
    import {QrCode, Encoder} from "./src/utils.js"

new QrCode(CORRECTION_LEVEL, "HELLO CC WORLD").build()

const enc = new Encoder("01234567")

enc.numeric()
