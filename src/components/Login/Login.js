import React ,{ useState , useEffect} from 'react';
import { Input } from '../Input/Input';
import './Login.css'
import { Button } from '../Button/Button';
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AuthApi from '../AuthApi';
import Cookies from 'js-cookie';
import CircularProgress from '@material-ui/core/CircularProgress';


function Alert(props) {
    return <MuiAlert elevation={5} variant="filled" {...props} />;
}

export const Login = (props) => {

    const Auth = React.useContext(AuthApi)
    const [user, setUser] = useState('')
    const messageInitial = props.location ? props.location.state.message : ''
    const [message, setMessage] =  useState(messageInitial)
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        if(message!==''){
            setOpen(true)
        }
    },[])
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleLogin = (event) => {
        event.preventDefault()
        setLoading(true)
        let username = event.target[0].value
        let password = event.target[1].value

        // conviertiendo user:password -> base64
        let str = username + ':' + password
        const token = 'Basic ' + window.btoa(unescape(encodeURIComponent( str )))
        const url = `http://localhost:8080/home`

        axios.get(url, {
            headers: {
                'Authorization': token
            }
        })
        .then((res) => {
            setLoading(false)
            console.log(res)
            setUser(username)
            setMessage('Login successfull')
            setOpen(true)
            Auth.setAuth(true)
            Cookies.set("user",username)
        })
        .catch((err) => {
            setLoading(false)
            setMessage(err.response ? err.response.data.error : "Connection Fatal Error")
            setOpen(true)  
            console.log(err)
        })
    }

    return (
        
        <div className="container">
            <form onSubmit={handleLogin}>
                <h1>SLOW CODE</h1>
                <Input placeholder='Username'/>
                <Input 
                    placeholder='Password'
                    type='Password'
                />
                
                {loading ?
                        <CircularProgress className="loading"/> 
                : 
                    <Button
                        name='LOGIN'
                    />
                }
            </form>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={user==='' ? "error" : "success"}>
                    {message}
                </Alert>
            </Snackbar>

        </div>
    )
} 