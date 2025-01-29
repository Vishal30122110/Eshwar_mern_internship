import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Alert,Breadcrumb,Card} from 'react-bootstrap';

function App() {
  return (

    
    <div className='header' >
      
      <Alert>I am SANA</Alert>
      <Alert variant="primary">I am Alert</Alert>
      <Alert variant="secondary">I am Alert</Alert>
      <Alert variant="success">I am Alert</Alert>
      <Button  type="button"
        class="btn btn-primary btn-lg btn-block"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
        disable>click me</Button>
      <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item> 
      <Breadcrumb.Item> About</Breadcrumb.Item>
      <Breadcrumb.Item>Contact</Breadcrumb.Item>
      </Breadcrumb>
      <Card >
        <Card.Title>
          Title:Card
        </Card.Title>
        <Card.Text>
          THIS IS REACT BOOTSTRAP
        </Card.Text>
        <Card.Img src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg">
        
        </Card.Img>
        <Card.Body>
        Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.
        </Card.Body>
        
      </Card>
    </div>

  );
}

export default App;