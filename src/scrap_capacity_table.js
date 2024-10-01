const url = "https://www.thonky.com/qr-code-tutorial/character-capacities"
const table = "div.table-responsive table"

async function getHtml() {
    const response = await fetch(url)
    if(!response.ok) {
        throw new Error(`Was not possible to get the ${url}`)
    }

    const html = await response.text()
    const table = getTableOfContent(html)
}

/**
    * @param { string } html
    */
function getTableOfContent(html) {

}
