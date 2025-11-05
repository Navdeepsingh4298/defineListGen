// Function to generate the Groups
function genGroups(grpsArray) {
    let Gout = '';
    grpsArray.forEach(grp => {
        Gout += `<group label="${grp.groupLabel}">${grp.groupName}</group> \n`;
    });
    return Gout;
}

export default genGroups;


{/* Example Output: <group label="g1">Samsung</group> */}