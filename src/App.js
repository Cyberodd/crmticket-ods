import './App.css'
import { Access } from './pages/access/Access.pages';
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
       {/*<Access/> */} 
      <DefaultLayout>
        Dashboard
      </DefaultLayout>
    </div>
  );
}

export default App;
