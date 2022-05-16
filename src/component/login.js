import {GoogleLogin} from 'react-google-login';

const clientId = '377077904697-bcaped50sbc1vuah30p9aescbc4nr24l.apps.googleusercontent.com';

function Login(){

    const onSuccess =(res) => {
        console.log("Login Confirmed", res.profileObj)
       alert("Login Confirmed", res.profileObj)

    }

    const onFailure =(res) => {
        console.log("Login Failed", res)
        alert('Login Failed', res)
    }
    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText = "Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn = {true}
            />
        </div>
    )
}

export default Login;