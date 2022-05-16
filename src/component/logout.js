import {GoogleLogin, GoogleLogout} from 'react-google-login';

const clientId = '377077904697-bcaped50sbc1vuah30p9aescbc4nr24l.apps.googleusercontent.com';

function Logout(){

    const onSuccedd= () => {
        console.log("Logout Success")
    }
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText = "Logout"
                onLogoutSuccess={onSuccedd}

            />
        </div>
    )
}

export default Logout;