import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import TaskListComponent from './components/containers/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/containers/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import RegisterTask from './components/pure/forms/registerTask';
function App() {
  return (
    <div className="App">

      {/*Ejemplos uso Formik y yup*/}`
      {/*<LoginFormik></LoginFormik>*/}
      {/*<RegisterFormik></RegisterFormik>*/}
      <RegisterTask></RegisterTask>
      {/*<TaskListComponent></TaskListComponent>*/}
      {/*Todo lo que hay aqui dentro, es tratado como props.children */}
      {/*
      <Ejemplo4 nombre="Lydia">
      
        <h3>
          Contenido del props.children
        </h3>
      </Ejemplo4>
     
      <GreetingStyled name="Lydia"></GreetingStyled> */}
      {/*<Father></Father>*/}

      {/*Ejemplos de renderizado condicional*/}
      {/*<OptionalRender></OptionalRender>*/}

    </div>
  );
}

export default App;
