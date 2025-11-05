import React from 'react';

// MUI Components
import { Button, Stack } from '@mui/material';

// MUI Icons
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


const HeaderContainer = (props) => {
  return (
    <>
      <div id="headerContainer" className='container1'>
        <Stack 
        direction="row" 
        spacing={2} 
        sx={{
        flexWrap: 'wrap',
        rowGap: 2,
      }}
>
          <label htmlFor=""> List Name <br />
            <input
              type="text"
              placeholder='Enter List Name'
              value={props.listName}
              onChange={props.handleListNameChange}
            />
          </label>

          <label htmlFor=""> Row Label Prefix <br />
            <input
              type="text"
              placeholder='Enter Row Prefix (e.g. Br)'
              value={props.rowLabel}
              onChange={props.handleRowLabelChange}
            />
          </label>

          <label htmlFor="" className='center'> Add Row Values <br />
            <input
              type="checkbox"
              checked={props.isAddRowValues}
              onChange={props.handleAddRowValues} />
          </label>

          <label htmlFor="" className='center'> Collapse Duplicates <br />
            <input type="checkbox"
              checked={props.isCollapseDupes}
              onChange={props.handleCollapseDupes} />
          </label>

          <Button
            variant="outlined"
            sx={{ borderRadius: '8px' }}
            onClick={props.handleAddStylevar}
          >
            <AddIcon />
            Add Stylevar
          </Button>

          <Button
            variant="outlined"
            sx={{ borderRadius: '8px' }}
            onClick={props.handleAddGroup}
          >
            <AddIcon />
            Add Group
          </Button>

          <Button
            variant="outlined"
            color="error"
            sx={{ borderRadius: '8px' }}
            onClick={props.handleResetListData}
          >
            <RestartAltIcon />
            Reset All
          </Button>
        </Stack>


      </div>
    </>
  )
}

export default HeaderContainer