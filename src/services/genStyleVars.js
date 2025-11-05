// Function to generate the style variables
function genStyleVars(SVNameArray) {
    let SVOut = '';
    SVNameArray.forEach(sv => {
        SVOut += `<stylevar name="cs:${sv}"/> \n`;
    });
    return SVOut;
}

export default genStyleVars;