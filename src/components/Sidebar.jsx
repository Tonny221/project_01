import Box from '@mui/material/Box'

function Sidebar () {
    return (
        <Box bgcolor="red" flex={1} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>Sidebar</Box>
    );
}

export default Sidebar;