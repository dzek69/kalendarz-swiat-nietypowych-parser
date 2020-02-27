const download = require("./wikiDownloader");
const parse = require("./wikiParser");

const parseYear = (y) => {
    if (!y) {
        return null;
    }
    if (String(y).match(/^\d{4}$/)) {
        return Number(y);
    }
};

const DEFAULT_YEAR = (new Date()).getFullYear();

const main = async (year) => {
    const YEAR = parseYear(year) || DEFAULT_YEAR;
    console.info("Using", YEAR, "as year");
    await new Promise(r => setTimeout(r, 1000));
    console.info("Downloading wiki page");
    const html = await download();
    console.info("Parsing article");
    return parse(html, YEAR);
};

module.exports = main;
