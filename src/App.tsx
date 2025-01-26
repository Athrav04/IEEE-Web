
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';


function App(props: { src: string }) {


  const src = props.src;
  return(
  <>
  <div>
        <Home src={src}/>
      </div>

  <Footer fb="https://www.facebook.com/viitieee/" ig="https://www.instagram.com/ieeeviit/" x="https://twitter.com/viit_ieee" linkedIn="https://www.linkedin.com/company/ieee-viit-student-branch/"/>
  </>
  )
  }
export default App
