import {useEffect,useState,useContext,createContext,ReactNode} from 'react';
import api from '../services/api';



interface TransactionProps {
    id:number,
    title:string,
    type:string,
    category:string,
    createdAt:string,
    amount:number
}

interface TransactionProviderProps {
    children:ReactNode
}

interface TransactionContextData {
    transactions:TransactionProps[],
    createTransaction:(transaction:TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<TransactionProps,'id' | 'createdAt'>

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData); 


export function TransactionsProvider({children}:TransactionProviderProps){
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get("/transactions").then((response) => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
         const response = await api.post('/transactions',{
             ...transactionInput,
             createdAt:new Date()
         })
         const {transaction} = response.data;

         setTransactions([
             ...transactions,
             transaction,
            ])
    }



    return (
        <TransactionsContext.Provider value={{transactions,createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions (){
    const context = useContext(TransactionsContext)

    return context
}