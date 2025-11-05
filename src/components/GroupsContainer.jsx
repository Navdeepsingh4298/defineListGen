// MUI Components
import { Button, Stack } from "@mui/material"

// MUI Icons
import RemoveIcon from '@mui/icons-material/Remove';

const GroupsContainer = (props) => {

  return (

    <>

      <div id="groupsContainer" className='container2'>
        <label htmlFor=""> Group Values <br />
          <textarea name="" id=""
            placeholder='Enter Groups Values'
            cols="30"
            rows="30"
            value={props.groups.groupValues.join("\n")}
            onChange={props.handleGrpValueChange}
          />
        </label>


        {
          props.groups.groupNames.map((grpName, index) => {
            return (
              <Stack
                spacing={1}
                mb={1}
                index={index}
                key={`"groupDetailContainer-"${index}`}
              >
                <label htmlFor=""> Group Label <br />
                  <input type="text"
                    placeholder='Enter Group Label'
                    value={grpName.groupLabel}
                    onChange={(e) => props.handleGrpLabelChange(e, index)}
                  />
                </label>

                <label htmlFor=""> Group Name <br />
                  <input type="text"
                    placeholder='Enter Group Name'
                    value={grpName.groupName}
                    onChange={(e) => props.handleGrpNameChange(e, index)}
                  />
                </label>

                <Button
                  variant="outlined"
                  sx={{ borderRadius: "8px" }}
                  onClick={() => props.handleRemoveGroup(index)}>
                  <RemoveIcon />
                  Remove Group
                </Button>
              </Stack>
            )
          })
        }

      </div>

    </>
  )

}

export default GroupsContainer;