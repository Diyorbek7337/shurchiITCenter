import './App.css';
import Advantage from './components/Advantages/Advantage';
import Course from './components/Course/Course';
import Main from './components/main/Main';
import Changings from './components/Change/Changings'
import Teams from './components/team/Teams';
import Comment from './components/Comments/Comment';
import Contacts from './components/Contact/Contacts';
import Footer from './components/Footer/footer'
function App() {
  return (
    <div className="App">
        <Main/>
        <Advantage/>
        <Course/>
        <Changings/>
        <Teams/>
        <Comment/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
