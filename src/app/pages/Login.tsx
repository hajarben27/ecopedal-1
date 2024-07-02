import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import { signIn, checkSignIn } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { sign } from 'crypto';

export default () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [signInLoading, setSignInLoading] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (signInLoading) {
      checkSignIn().then((user) => {
        if (user) {
          navigate('/main');
        } else {
          setSignInLoading(false);
        }
      });
    }
  }, [signInLoading]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = async () => {
    const user = await signIn(email, password);
    if (user) {
      navigate('/main');
    }
  };

  if (signInLoading) {
    return (
      <CircularProgress
        sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '20vh' }}
      />
    );
  }

  return (
    <Card
      sx={{
        maxWidth: 345,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20vh',
        padding: '1rem',
      }}
    >
      <CardMedia
        component="img"
        alt="ecopedal logo"
        height="320"
        image="/assets/logo.png"
      />
      <CardContent>
        <Box
          component="form"
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
        >
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            onChange={(ev) => setPassword(ev.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" onClick={login}>
          Login
        </Button>
        <Button color="secondary" variant="contained">
          Signup
        </Button>
      </CardActions>
    </Card>
  );
};
