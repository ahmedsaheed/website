// import {GoogleLogin} from 'react-google-login';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { render } from 'react-dom';


const clientID = '377077904697-bcaped50sbc1vuah30p9aescbc4nr24l.apps.googleusercontent.com';
<GoogleOAuthProvider clientId='377077904697-bcaped50sbc1vuah30p9aescbc4nr24l.apps.googleusercontent.com'>


</GoogleOAuthProvider>;

function Login(){

    return(
    <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
      style="visibility: hidden";
    }}
    onError={() => {
      console.log('Login Failed');
    }}
    useOneTap
  />);
    
    
}

export default Login;