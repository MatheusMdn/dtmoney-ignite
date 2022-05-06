import {useState} from 'react';
import Modal from "react-modal";

import Dasboard from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import GlobalStyles from "./styles/globalstyle";
import {TransactionsProvider} from "./hooks/useTransactions";

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onRequestOpen={handleOpenNewTransactionModal}
      />
      <Dasboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles />

      
    </TransactionsProvider>
  );
}

export default App;
