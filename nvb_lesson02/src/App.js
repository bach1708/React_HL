import './App.css';
import NvbClassComp from './components/NvbClassComp';
import NvbFuncComp from './components/NvbFuncComp';
import NvbJsxExpression from './components/NvbJsxExpression';

function App() {
  return (
    <div className="container border">
      <h1>Làm việc với các thành phần cơ bản bên trong Reactjs</h1>
      <hr/>
      <NvbJsxExpression/>
      <NvbFuncComp/>
      <NvbFuncComp name="Nong Bach" age="24"/>
      <NvbClassComp></NvbClassComp>
      <NvbClassComp fullName="Nong Van Bach" company="FitNTU"/>
      <NvbClassComp fullName="Bach Van Nong" company="K22CNT1"/>

      

    </div>
  );
}

export default App;
