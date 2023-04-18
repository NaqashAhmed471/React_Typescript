import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: "Wayne"
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last:'Diana'
    }
  ]

  return (
    <div className="App">
      {/* string number boolean' */}
      <Greet name="Vishwas" messageCount={20} isLoggedIn={true} /> '
      {/* 'object type' */}
      <Person  name={personName} /> 
      {/* 'array type' */}
      <PersonList names={nameList} /> 
      {/* 'union type' */}
      <Status status='loading' />  
      {/* 'children type' */}
      <Heading>PlaceHolder text</Heading> 
      {/* reactNode type */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dispario!</Heading>
      </Oscar>
      {/* optional type (messageCount={20}) is optional */}
      <Greet name="Vishwas"  isLoggedIn={true} /> 
      {/* event props */}
      <Button handleClick={(event,id) => {
        console.log('Button Clicked',event,id)
      }} />
      <Input value="" handleChange={(event) => console.log(event)} />
      {/* Style props */}
      <Container style={{border: '1px solid red', padding: '1rem'}} />
    </div>
  );
}

export default App;
