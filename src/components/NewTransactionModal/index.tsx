import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import {Container}  from './styles';

interface newTransactionModalProps {
    isOpen:boolean;
    onRequestClose:() => void;
}


export function NewTransactionModal({isOpen,onRequestClose}: newTransactionModalProps){
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      > 
        <button className="close-modal"type='button' onClick={onRequestClose}>
            <img src={closeImg} alt="Fechar Modal" />
        </button>

        <Container>
            <h2>Cadastrar Transação</h2>
            
            <input 
            type="text" 
            placeholder='Título'
            />

            <input 
            type="number"
            placeholder="Valor"
            />

            <input 
            type="text" 
            placeholder="Categoria"
            />

            <button type='submit'>Cadastrar</button>

        </Container>
      </Modal>
    )
}