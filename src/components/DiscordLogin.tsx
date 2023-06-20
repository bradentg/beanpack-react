
interface DiscordLoginProps {
  clientId: string,
  redirectUri: string,
  scope?: string,
  render?: any,
}

const DiscordLogin = ({ clientId, redirectUri, scope = 'identify', render }: DiscordLoginProps) => {

    return (

        <div className="flex align-items-center justify-content-center h-100" >
            <a id="login" href={`https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`} className="btn bg-discord-blue text-xl px-4 py-3 rounded-md font-bold flex align-items-center space-x-4 hover-bg-gray-600 text-white">
                <i className="fa-brands fa-discord text-2xl mx-1"></i>
                <span>Login with Discord</span>
            </a>
        </div>
    )
}

export default DiscordLogin