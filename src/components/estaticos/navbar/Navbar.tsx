import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  function goLogout() {
    setToken('');
    alert('Usuário deslogado');
    navigate('/login');
  }

  return (
    <AppBar position="static" className="appBar">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title">
          Bey News
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Link to="/home" className="text-decorator-none">
            <Box mx={1} className='cursor' style={{ margin: '0 8px' }}>
              <Typography variant="h6" color="inherit" style={{ color: "white" }} className="button-link">
                Home
              </Typography>
            </Box>
          </Link>
          <Link to="/posts" className="text-decorator-none">
            <Box mx={1} className='cursor' style={{ margin: '0 8px' }}>
              <Typography variant="h6" color="inherit" style={{ color: "white" }} className="button-link">
                Postagens
              </Typography>
            </Box>
          </Link>
          <Link to="/temas" className="text-decorator-none">
            <Box mx={1} className='cursor' style={{ margin: '0 8px' }}>
              <Typography variant="h6" color="inherit" style={{ color: "white" }} className="button-link">
                Temas
              </Typography>
            </Box>
          </Link>
          <Link to="/formularioTema" className="text-decorator-none">
            <Box mx={1} className='cursor' style={{ margin: '0 8px' }}>
              <Typography variant="h6" color="inherit" style={{ color: "white" }} className="button-link">
                Cadastrar Tema
              </Typography>
            </Box>
          </Link>
          <Box mx={1} className='cursor' onClick={goLogout} style={{ margin: '0 8px' }}>
            <Typography variant="h6" color="inherit" style={{ color: "white" }} className="button-link">
              Logout
            </Typography>
          </Box>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
