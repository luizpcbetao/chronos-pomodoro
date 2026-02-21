import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá Mundo 1
      </Heading>
      <Heading>Olá Mundo 2</Heading>
      <Heading>Olá Mundo 3</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        quidem autem ea voluptas illum minus vitae ratione animi tempore
        reprehenderit, unde dolor accusantium rerum fuga officiis sequi vel id
        debitis?
      </p>
    </>
  );
}
