import genHeadFoot from "./genHeadFoot.js";
import genStyleVars from "./genStyleVars.js"
import genRows from "./genRows.js"
import validateListData from "../utils/validateListData.js"
import removeDuplicateRows from "./removeDuplicateRows.js"
import genGroups from "./genGroups.js"

// Main function to handle the entire process
function genList(listData) {
    try {
        // Validate the test data
        validateListData(listData);

        //Remove Duplicate rows and merge style vars if any
        if(listData.isCollapseDupes){
            removeDuplicateRows(listData)
        }

        // Destructure needed values from listData
        const {listRows, rowLabel, isRowValues} = listData;
        const { name: SVNameArray, values: SVValueArray } = listData.styleVars;
        const { groupNames: grpNames, groupValues: grpVals } = listData.groups;

        // Generate style variables and list header/footer
        const SVOut = genStyleVars(SVNameArray);
        
        //Generate groups
        const Grpout = genGroups(grpNames);

        const { listHeader, listFooter } = genHeadFoot(listData.listName);

        // Generate rows
        const listRowsOut = genRows(listRows, SVNameArray, SVValueArray, rowLabel, isRowValues, grpVals);

        // Output the final result
        // console.log(SVOut+listHeader+Grpout+listRowsOut + listFooter);

        let finalOutput = SVOut + listHeader + Grpout + listRowsOut + listFooter;

        return {statusCode: 200, errMsg: null, genOutput: finalOutput}

    } catch (error) {
        console.error('Error generating list:', error.message);
        return {statusCode: 1, errMsg: error.message, genOutput: null }
    }
}

export default genList;