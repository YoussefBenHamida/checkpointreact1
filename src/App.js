import './App.css';
import Name from './Name'
import Descreption from './Descreption';
import Price from './Price'
import Image from './Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  var name ='youssef'
  return (
<>
<Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title>
        <Name />
        </Card.Title>
        <Card.Text>
          <Descreption/>
        </Card.Text>
        <Card.Text>
         <Price/>
        </Card.Text>
        <Button variant="primary">Buy me</Button>
      </Card.Body>
    </Card>
    <h1>{name ? `hello ${name}`: "hello there!"}</h1>
    <h1>{name?<img src='https://th.bing.com/th/id/OSK.HEROEvzHDF3XJT-r9IPTXBdlxprnBlzX2b-Z3qoeHUv7K5s?rs=1&pid=ImgDetMain' alt = 'Picture'></img>:'' }</h1>
</>
  );

}

export default App;
