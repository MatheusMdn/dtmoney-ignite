
import logoImg from '../../assets/logo.svg';


import {Container,Content} from './styles';

interface HeaderProps {
    onRequestOpen:() => void;
}

export function Header({onRequestOpen}:HeaderProps){
   
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button 
                type='button'
                onClick={onRequestOpen}
                >
                    Nova Transação
                </button>

                
            </Content>
        </Container>
    )
}