
// Function to validate the list data
function validateListData(testData) {

    // Validation to check if any input is empty
    if (!testData.listName || !testData.styleVars || !testData.rowLabel || !testData.listRows || !testData.groups) {
        throw new Error('Missing required properties. Please check all the fields and try again.');
    }

    // ===========================================  
    //        Validations for Style Variables
    //  ===========================================
    const { name: SVNameArray, values: SVValueArray } = testData.styleVars;

    if (!Array.isArray(SVNameArray) || !Array.isArray(SVValueArray)) {
        throw new Error('styleVars.name and styleVars.values should be arrays.');
    }

    if (SVNameArray.length !== SVValueArray.length) {
        throw new Error('The number of style variables does not match the number of value arrays.');
    }

    SVNameArray.forEach(svname => {
        if (svname.trim() == ""){
            throw new Error('StyleVar name cannot be empty. Please enter value for StyleVar name');
        }
    })

        SVValueArray.forEach(svvalues => {
        if (svvalues.length == 0){
            throw new Error('StyleVar values cannot be empty. Please enter value for StyleVar values');
        }
        svvalues.forEach(svvalue=>{
            if(svvalue.trim() == ""){
                throw new Error('StyleVar values cannot be empty. Please enter value for StyleVar values');
            }
        })
    })

    if (SVValueArray.some(arr => arr.length !== testData.listRows.length)) {
        throw new Error('The number of values for each style variable does not match the number of rows.');
    }

    if (!Array.isArray(testData.listRows) || testData.listRows.length === 0) {
        throw new Error('listRows should be a non-empty array.');
    }


    // ===========================================  
    //              Validations for Groups
    //  ===========================================
    const { groupNames: grpNames, groupValues: grpVals} = testData.groups;

    if((grpNames.length > 0) || (grpVals.length > 0)){
        
        
        grpNames.forEach((grp,index)=>{
            
            
            // Validation: group label is empty when group name has data or vice versa
            if((!grp.groupLabel.trim() && grp.groupName.trim()) || (grp.groupLabel.trim() && !grp.groupName.trim()) || (!grp.groupLabel.trim() && !grp.groupName.trim())){
                throw new Error("Group Name and Group Label cannot be empty. Please make sure they both have values before trying again.");
            }
            
            
            // Validation: check if any group label not mentioned in group values
            if (!grpVals.includes(grp.groupLabel)){
                throw new Error(`${grp.groupLabel} is not assigned to any row. Unassigned Group Label is not allowed.`);
            }
            
            // Validation: if Invalid data entered
            if (typeof grp.groupLabel !== 'string' || typeof grp.groupName !== 'string') {
                throw new Error(`Invalid data type for groupName or groupLabel. Expecting strings.`);
            }
            
            
            // Validation: check for duplicate group labels or group names
            const labelSet = new Set();
            const nameSet = new Set();
            
            grpNames.forEach(grp => {
                if (labelSet.has(grp.groupLabel)) {
                    throw new Error(`Duplicate group label found: ${grp.groupLabel}. Group Label cannot be duplicate.`);
                }
                if (nameSet.has(grp.groupName)) {
                    throw new Error(`Duplicate group name found: ${grp.groupName}. Group Name cannot be duplicate.`);
                }
                labelSet.add(grp.groupLabel);
                nameSet.add(grp.groupName);
            });
            
            
            
        })

        // Validation: To check if whole group values array is empty
        if (grpVals.length == 0){
                throw new Error("All the Group Values cannot be empty.");
            }

    
        
        grpVals.forEach(val => {

            // Validation: check if group values empty
            if (val.trim() === ""){
                throw new Error("Group values cannot be empty.");
            }

            // Validation: check if any group value not mentioned in group labels
            if (!grpNames.some(grp => grp.groupLabel === val)) {
                throw new Error(`${val} in groupValues is not defined in any group label.`);
            }
        });

                   // Validation: If no. of group values doesn't match no. of list rows
        if (grpVals.length != testData.listRows.length){
            throw new Error('The number of group values does not match with the number of list rows.');
        }

        
    }


   

}

export default validateListData;