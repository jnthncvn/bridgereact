import React from "react";
import { TextField } from "@mui/material";
import bridgepic from "../assets/BridgenoteLogo.png";
import bridgebackground from "../assets/Background.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

export default function Login() {

let navigate = useNavigate();
const [username, setUsername] = React.useState('');
const [password, setPassword] = React.useState('');


const handleSubmit = (event) => {
  if(!username || !password){
    swal({
      title: "Isi Field!",
      icon: "error",
      button:"OK",
    })
  }
  else{
    swal({
      title: "Berhasil Login!",
      icon: "success",
      button:"OK",
    }).then(()=>{
      navigate("/successlogin"); 
      window.location.reload();
    });
  }
}

  return (
    <div className="login w-full ">
      <img className="w-full" src={bridgebackground} alt="background" />
        <div className="border rounded-3xl opacity-95 bg-white p-2 m-5 w-1/5 h-4/5 flex justify-center absolute bottom-40 left-4 ">
          <div className="container  ">
            <div className="flex justify-center">
              <img src={bridgepic} alt="logologin" />
            </div>
            <div className="m-8 grid grid-cols-1 ">
              <TextField
                className="mb-3"
                type="text"
                label="Username"
                name="username"
                variant="standard"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />

              <TextField
                className="my-3"
                type="password"
                label="Password"
                name="password"
                variant="standard"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <div className="flex justify-between text-sm mt-3">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Keep me signed in"
                />
                <a href="#" className="no-underline hover:underline pt-2.5">
                  Forgot password
                </a>
              </div>

            </div>
             <div className="m-24 content-end">
                <button
                  onClick={handleSubmit}
                  className="text-white  p-4 w-full  rounded-md bg-bridgenotelogo"
                >
                  LOG IN
                </button>
              </div>
          </div>
        </div>
    </div>
  );
}
