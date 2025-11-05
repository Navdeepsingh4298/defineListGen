// Function to generate a single row element
function genRow(rowName, index, SVNameArray, SVValueArray, rowLabel, isRowValues, grpVals) {

    let value = isRowValues ? `value="${index + 1}"` : ""
    let rowOutput = `<row label="${rowLabel}${index + 1}" ${value}`;

    // Add style variable values
    SVNameArray.forEach((svName, svIndex) => {
        rowOutput += ` cs:${svName}="${SVValueArray[svIndex][index]}"`;
    });

    // Add group values
    rowOutput += ` groups="${grpVals[index]}"`;
    

    // Close the row tag and add the row name
    rowOutput += `>${rowName}</row>\n`;

    return rowOutput;
}

export default genRow;