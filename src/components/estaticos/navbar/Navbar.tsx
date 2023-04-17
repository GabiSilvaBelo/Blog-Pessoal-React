import React from 'react';
import { AppBar, Toolbar, Typography, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <AppBar position="absolute">
            <Toolbar variant="regular">
                <Box display="flex" alignItems="center" flexGrow={1}>
                    <Typography variant="h5" color="inherit">
                        Blog da Gabey
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="flex-end" sx={{ gap: 3 }}>
                    <Box className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                    <Box className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                    <Box className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                    <Box className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Cadastrar Tema
                        </Typography>
                    </Box>
                    <Link to='/login' className='text-decorator-none'>
                        <Box className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
