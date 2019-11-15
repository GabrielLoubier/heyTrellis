const images = require.context("../images", true);

export default function getImage(name) {
    try {
        return images(`./${[name.split(' ')[0].toLowerCase()]}.jpg`);
    } catch (e) {
        return images("./default.jpg");
    }
}