import './App.css'
//import { Access } from './pages/access/Access.pages';//
import { DefaultLayout } from "./layout/DefaultLayout";
//import { Dashboard } from './pages/dashboard/Dashboard.page';//
import { AddTicket } from './assets/new-ticket/AddTicket.page';

function App() {
  return (
    <div className="App">
       {/*<Access/> */} 
      <DefaultLayout>
       {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
