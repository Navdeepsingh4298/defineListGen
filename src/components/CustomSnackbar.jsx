
// MUI components
import { Snackbar, Alert } from '@mui/material';

const CustomSnackbar = ({msgOpen,handleMsgClose,snackbarMsg}) => {
    return (

        <>
            <Snackbar open={msgOpen} autoHideDuration={5000} onClose={handleMsgClose}>
                <Alert
                    onClose={handleMsgClose}
                    // severity="success" --- IGNORE ---
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMsg}
                </Alert>
            </Snackbar>
        </>
    )
}

export default CustomSnackbar