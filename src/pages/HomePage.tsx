import './HomePage.css'
import DiscordLogin from '../components/DiscordLogin'

export const HomePage = () => {
    return (
        <div>
            <h1>BeanPack: The Website</h1>
            <h3>Here it is</h3>
            <h5>Yep, this is the one</h5>
            <p>It's coming along</p>
            <DiscordLogin 
                clientId=''
                redirectUri=''
            />
        </div>
    )
}