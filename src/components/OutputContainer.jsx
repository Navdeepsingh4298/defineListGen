import React, { useState } from 'react';

// MUI components
import { Button } from '@mui/material';

// MUI Icons
import ClearIcon from '@mui/icons-material/Clear';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';

// local components
import CustomSnackbar from './CustomSnackbar.jsx';

// local utils
import downloadAsFile from "../utils/downloadAsFile.js"
import copyToClipboard from "../utils/copyToClipboard.js"

const OutputContainer = (props) => {

  // State to manage Snackbar visibility and message
  const [msgOpen, setMsgOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");



  // Function to handle Snackbar close event
  // It checks if the reason for closing is 'clickaway' and does nothing in that case
  // Otherwise, it sets the Snackbar open state to false
  // This will close the Snackbar when the user clicks away or after the autoHideDuration
  // which is set to 5000 milliseconds (5 seconds)
  const handleMsgClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMsgOpen(false);
  };



  // Function to handle copy to clipboard button click
  // It copies the outputValue to clipboard and shows a Snackbar message
  // The Snackbar will automatically close after 5 seconds
  // or can be closed by clicking away
  const handleCTCClick = () => {

    try {
      // Validate error state
      if (props.errData.isError) {
        throw new Error("Please fix the error before copying to clipboard.");
      }

      // Validate outputValue
      if (!props.outputValue || props.outputValue.trim() === "") {
        throw new Error("Output is empty. Please generate the list first.");
      }

      // Copy to clipboard
      copyToClipboard(props.outputValue);
      setMsgOpen(true);
      setSnackbarMsg("Define list is copied to clipboard!")
    } catch (error) {
      // console.error("Clipboard copy error:", error);
      props.setErrData({
        isError: true,
        errMsg: error.message || "Something went wrong while copying to clipboard."
      });
    }
  };

  // Function to handle the download as file button click
  const handleDownloadAsFile = () => {

    try {
      // Check for existing error
      if (props.errData.isError) {
        throw new Error("Please fix the error before downloading.");
      }

      // Validate outputValue
      if (!props.outputValue || props.outputValue.trim() === "") {
        throw new Error("Output is empty. Please generate the list first.");
      }

      // Validate listFileName
      if (!props.listFileName || props.listFileName.trim() === "") {
        throw new Error("Please provide a valid List Name which can be used as file name.");
      }

      // Attempt to download
      downloadAsFile(props.outputValue, props.listFileName);
      setMsgOpen(true);
      setSnackbarMsg("Define list started downloading!")
    } catch (error) {
      // console.error("File downloading error:", error);
      // Set error state with message
      props.setErrData({
        isError: true,
        errMsg: error.message || "Something went wrong during download."
      });
    }
  };

  return (
    <>
      <div id="outputContainer" className='container2' style={{ "width": "20rem" }}>
        <label htmlFor=""> Output <br />
          <textarea name="" id=""
            placeholder='Output will be generated here....'
            cols="40" rows="30"
            className='output-field'
            value={props.errData.isError ? "Please fix the Error and Try Again." : props.outputValue}
            readOnly
          />
        </label>

        <div className="container1">
          <Button
            variant="contained"
            sx={{ borderRadius: "8px" }}
            onClick={props.handleGenList}>Generate List</Button>

          <Button
            variant="outlined"
            sx={{ borderRadius: "8px" }}
            onClick={handleDownloadAsFile}>
            <DownloadIcon />
            text file
          </Button>

          <Button
            variant="outlined"
            sx={{ borderRadius: "8px" }}
            onClick={handleCTCClick}>
            <ContentCopyIcon />
            Copy
          </Button>

          <Button
            variant="outlined"
            color='error'
            sx={{ borderRadius: "8px" }}
            onClick={props.handleClearOutput}>
            <ClearIcon />
            Clear Output
          </Button>


          <CustomSnackbar
            msgOpen={msgOpen}
            handleMsgClose={handleMsgClose}
            snackbarMsg={snackbarMsg}
          />

        </div>
      </div>
    </>
  )
}

export default OutputContainer