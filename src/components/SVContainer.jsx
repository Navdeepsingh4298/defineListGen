// MUI Components
import { Button, Stack } from "@mui/material"

// MUI Icons
import RemoveIcon from '@mui/icons-material/Remove';

// StyleVar Container Component for each Style Variable

const SVContainer = (props) => {
  return (
    <>
      <Stack
        spacing={1}>
        <label htmlFor=""> Stylevar Values <br />
          <textarea name="" id=""
            placeholder='Enter Stylevar Values'
            cols="30"
            rows="30"
            className='output-field'
            value={props.SVValue}
            onChange={(e) => props.handleStyleVarValueChange(e, props.index)}
          />
        </label>

        <label htmlFor=""> Stylevar Name <br />
          <input type="text"
            placeholder='Enter Stylevar Name'
            value={props.SVName}
            onChange={(e) => props.handleStyleVarChange(e, props.index)}
          />
        </label>

        <Button
          variant="outlined"
          sx={{ borderRadius: "8px" }}
          onClick={() => props.handleRemoveStylevar(props.index)}>
          <RemoveIcon />
          Remove Stylevar
        </Button>
      </Stack>
    </>
  )
}

export default SVContainer