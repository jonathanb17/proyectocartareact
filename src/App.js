import './App.css';

// componentes
// import Informacion from './components/Informacion';
import Borrar from './components/Borrar';
import Usuarios from './components/Usuarios';
import Categoria from './components/Categoria';
import Infor from './components/Infor';

import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Link } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Administracion</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active" style={{ padding: '10px', listStyle: 'none' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>Productos</Link>
              </li>

              <li className="nav-item active" style={{ padding: '10px', listStyle: 'none' }}>
                <Link to="/categoria" style={{ textDecoration: 'none' }}>Categoria</Link>
              </li>
              <li className="nav-item" style={{ padding: '10px', listStyle: 'none' }}>
                <Link to="/usuarios" style={{ textDecoration: 'none' }}>usuarios</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <Route component={Informacion} /> */}
        <Route path="/borrar" component={Borrar} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/categoria" component={Categoria} />
        <Route exact path="/" component={Infor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
