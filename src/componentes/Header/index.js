import Logo from '../logo';
import IconesHeader from '../IconesHeader';
import OpcoesHeader from '../OpcoesHeader';
import './estilo.css';

function Header(){
    return(
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/> 
        </header>
    )
};

export default Header;