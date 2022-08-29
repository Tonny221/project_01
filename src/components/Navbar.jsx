import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import SpaIcon from '@mui/icons-material/Spa';
import MailIcon from '@mui/icons-material/Mail'
import { Notifications } from '@mui/icons-material';
import { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: '5px 20px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}));

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => {

    }

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>Evolve</Typography>
                <SpaIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search>
                    <InputBase placeholder='Search...' />
                </Search>
                <Icons>
                    <Badge badgeContent={7} color='error'>
                        <MailIcon color='action' />
                    </Badge>
                    <Badge badgeContent={3} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} alt='user-icon' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30 }} alt='user-icon' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
                    <Typography variant='span'>User</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                open={open}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Account</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;