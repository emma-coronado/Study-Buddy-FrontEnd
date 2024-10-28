import './App.css';
import NavBar from './navbar';

// default from react project
function App() {
  return (
    <div className="body">
      <NavBar/>
      <NavBar />
    </div>
  );
}

export default App;

function NavBar() {
  return (
    <p>hi</p>
  );
}
