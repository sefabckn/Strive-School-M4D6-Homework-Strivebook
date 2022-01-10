import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import items from './scifi.json'
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea ';

function App() {
  return (
    
    <div>
      <MyNavbar brand="Strivebook" />
      <WarningSign  text ={'Dangerous Alert'}/>
      <MyBadge text={'Successfully'} color={'danger'} />
      <div className='row'>
        <div className='col-8'>
          <BookList books = {items}/>
        </div>
        <div className='col-4'>
        <CommentArea />
        </div>
      </div>
    </div> 
    
  );
}

export default App;
