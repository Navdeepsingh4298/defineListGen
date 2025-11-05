// Function to generate list header and footer
function genHeadFoot(listName) {
    const listHeader = `\n<define label="${listName}">\n`;
    const listFooter = `\n</define>`;
    return { listHeader, listFooter };
}

export default genHeadFoot;