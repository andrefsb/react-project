import './estilo.css';
import logo from '../../imagens/logo.svg';

function Logo(){
    return (
        <div className='logo'>
            <img src={logo} alt='logo' ></img>
            <p>My<strong>Books</strong></p>
        </div>
    )
}


export default Logo;