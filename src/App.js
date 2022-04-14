import Home from './Components/Home'
import Nav from './Components/Nav'
import { Button } from 'reactstrap';

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Button>Button</Button>
    </div>
  )
}

export default App