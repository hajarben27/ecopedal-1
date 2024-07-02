import { AppBar, Button } from "@mui/material"
import { logOut } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default () => {

    const navigate = useNavigate();

    const signOut = async () => {
        await logOut();
        navigate('/');
    }

    return (
      <AppBar>
        <Button variant="contained" onClick={signOut}>Logout</Button>
      </AppBar>
    );
  }