import React from 'react'

// MUI Components
import { Button } from "@mui/material"

// MUI Icons
import ClearIcon from '@mui/icons-material/Clear';

const ListContainer = (props) => {
  return (
    <>
      <div id="listContainer" className='container2'>
        <label htmlFor=""> List Rows <br />
          <textarea name="" id=""
            placeholder='Enter List Rows'
            cols="40"
            rows="30"
            className='output-field'
            value={props.listRows}
            onChange={props.handleListRowsChange}
          />
        </label>

        <Button
          variant="outlined"
          sx={{ borderRadius: "8px" }}
          onClick={() => props.handleClearText('listRows', [""])}>
          <ClearIcon />
          Clear Rows
        </Button>
      </div>
    </>
  )
}

export default ListContainer