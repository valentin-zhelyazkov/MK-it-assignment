import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Axios from 'axios';
import MovieDataContext from '../context/MovieDataContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { auth } from '../database/db';
import { signOut } from 'firebase/auth';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [movie, setMovie] = React.useState<string>();
  const [user, loading, error] = useAuthState(auth);
  const { populateMovieData } = React.useContext(MovieDataContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    Axios.get(`https://api.tvmaze.com/search/shows?q=${movie}`).then((res: any) => {
      //@ts-ignore
      populateMovieData(res);
    });
  }, [movie]);

  const onLogout = () => {
    signOut(auth);
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#0000006b", color: "yellow" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/">
              My Movie Collection
            </Link>
            {user ? <Button variant="text" color="error" className="ml-8" sx={{ marginLeft: "10px" }}onClick={onLogout}>Logout</Button> :
              <>
                <Link to="/login" className="mx-4 ml-8">
                  Login
                </Link>
                <Link to="/register" className="mx-4">
                  Register
                </Link>
              </>
            }
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setMovie(e.target.value)}
            />
            <Button variant="outlined">
              <Link to='/search' className="decoration-white">
                Search
              </Link>
            </Button>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
