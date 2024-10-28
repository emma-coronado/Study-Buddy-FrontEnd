import './App.css';
import Login from './Login';
import Register from './Register';
import Page from './loginPlusRegister';
import ListingCard from './ListingCard';

// default from react project
function App() {
  return (
    <div className="body">
      <ListingCard name="Jane Doe" subjects="prog 1, chemistry" bio="This is some stuff about me :)" id='1'/>
      <ListingCard name="Emma" subjects="DSA" bio="This is some stuff about me :)" id='2'/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
