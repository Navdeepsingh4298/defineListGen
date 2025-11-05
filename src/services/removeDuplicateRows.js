import mergeStyleVars from "./mergeStyleVars";

const removeDuplicateRow = (listData) =>{
    let rows = listData.listRows;

    const uniqueItems = new Set();
    const dupRowIndexes = [];
    const orgRowIndexes = [];

    // Iterate through the rows array
    rows.forEach((item,index)=>{
        // If item is already in the set, it's a duplicate
        if(uniqueItems.has(item)){
            dupRowIndexes.push(index);  // Store duplicate index of row
            orgRowIndexes.push(rows.indexOf(item)) // Store orginal index of row
        }
        else{
            uniqueItems.add(item);  // Otherwise, add the item to the set
        }
    })

    // Remove the duplicates from the array by filtering out the indices
    listData.listRows = rows.filter((item, index) => !dupRowIndexes.includes(index));

    // merge duplicate rows style vars to original ones
    mergeStyleVars(listData, dupRowIndexes,orgRowIndexes)
}

export default removeDuplicateRow;

