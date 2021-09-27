import './App.css'
//import { Access } from './pages/access/Access.pages';//
import { DefaultLayout } from "./layout/DefaultLayout";
//import { Dashboard } from './pages/dashboard/Dashboard.page';//
//import { AddTicket } from './assets/new-ticket/AddTicket.page';//
import { TicketList } from "./pages/ticket-list/TicketList.page";

function App() {
  return (
    <div className="App">
       {/*<Access/> */} 
      <DefaultLayout>
       {/* <Dashboard /> */}
       {/*<AddTicket /> */}
       <TicketList/>
      </DefaultLayout>
    </div>
  );
}

export default App;
