export function convertToBinary(data, pad = 8) {
    return data.toString(2).padStart(pad, "0");
}
