import Box from '@mui/material/Box'

function Rightbar () {
    return (
        <Box bgcolor="blue" flex={2} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>Rightbar</Box>
    );
}

export default Rightbar;