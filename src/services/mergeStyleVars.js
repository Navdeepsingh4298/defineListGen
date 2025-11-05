const mergeStyleVars = (listData, dupRowIndexes,orgRowIndexes) =>{

    let {name: SVNamesArr, values: SVValuesArr} = listData.styleVars;

    SVValuesArr.forEach((SVValues)=>{
        // merge duplicate stylevar values in original row
        orgRowIndexes.forEach((orgItemIdx, orgIdx)=>{
            dupRowIndexes.forEach((dupItemIdx, dupIdx)=>{
                if((orgIdx == dupIdx) && SVValues[orgItemIdx] != SVValues[dupItemIdx]){
                    // check if duplicate index value doesn't already exist
                   if (!SVValues[orgItemIdx].split(",").includes(SVValues[dupItemIdx])){
                       // Concatenate the values and update SVValues[orgItemIdx]
                       SVValues[orgItemIdx] += "," + SVValues[dupItemIdx];
                   }
                }
            })
        })

        
        // removing duplicate stylevar rows
        // sort duplicate indexs in reverse order
        dupRowIndexes.sort((a, b) => b - a).forEach(index => {
            // remove one item at index passed
            SVValues.splice(index, 1);
        });
        
    })
}

export default mergeStyleVars;