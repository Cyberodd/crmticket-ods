import './App.css'
import { Access } from './pages/access/Access.pages';
import { Ticket } from './pages/ticket/Ticket.page';
import {BrowserRouter as Router,
Switch,
Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './assets/new-ticket/AddTicket.page';
import { TicketList } from "./pages/ticket-list/TicketList.page";
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path = "/"><Access/></Route>
         <PrivateRoute path ="/dashboard"><Dashboard /></PrivateRoute>
          <PrivateRoute path ="/add-ticket"><AddTicket /> </PrivateRoute>
          <PrivateRoute path ="/ticket-list"><TicketList/></PrivateRoute>
          <PrivateRoute path ="/tickets/:tId"><Ticket /></PrivateRoute>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
