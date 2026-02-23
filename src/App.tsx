import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem autem ea voluptas illum minus vitae
        ratione animi tempore reprehenderit, unde dolor accusantium rerum fuga officiis sequi vel id debitis?
      </p>
    </>
  );
}
