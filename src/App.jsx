import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      name: 'BackEnd',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      name: 'FrontEnd',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      name: 'Data Science',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      name: 'Devops',
      corPrimaria: '#D86EBF',
      corSecundaria:'#FAE95F5'
    },
    {
      name: 'UX e Design',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      name: 'Mobile',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }    
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const newEmployeeAdded = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
          <Banner />
          <Formulario times={times.map(time => time.name)} registeredEmployee={employee => newEmployeeAdded(employee)} />
          
          {times.map(time => <Time 
          key={time.name} 
          title={time.name} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
          />)}
          
          
          

      </div>
  )
}

export default App
