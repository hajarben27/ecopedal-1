import { AppBar, Button } from "@mui/material"
import { logOut } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default () => {

    const navigate = useNavigate();

    const signOut = async () => {
        await logOut();
        navigate('/');
    }

<TextField
  hiddenLabel
  id="filled-hidden-label-small"
  defaultValue="Small"
  variant="filled"
  size="small"
/>
<TextField
  hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
/>

    
    return (
      <AppBar>
        <Button variant="contained" onClick={signOut}>Logout</Button>
      </AppBar>
    );
  }
