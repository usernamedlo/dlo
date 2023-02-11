import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faSpotify, faGithub, faEthereum} from '@fortawesome/free-brands-svg-icons'

export const SocialLinks = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-full">
            <div className='flex text-6xl'>
                <a href="https://www.youtube.com/@0xdlo" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500 mr-2"></FontAwesomeIcon>
                </a>

                <a href="https://opensea.io/0xdlo" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEthereum} className="hover:text-blue-500 mr-2"></FontAwesomeIcon>
                </a>

                <a href="https://open.spotify.com/user/lo%C3%AFcorne?si=8eba713241cd4019" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSpotify} className="hover:text-green-500 mr-2"></FontAwesomeIcon>
                </a>

                <a href="https://github.com/0xdlo" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="hover:text-[#272D39] mr-2"></FontAwesomeIcon>
                </a>
            </div>
        </section>
    )
}
