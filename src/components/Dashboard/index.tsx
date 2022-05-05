import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";
import { Container } from "./styles";



export default function Dasboard() {
  return (
    <Container>
        <Summary/>
        <TransactionsTable/>

    </Container>
  )
}
