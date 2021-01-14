//import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

/* const App = (props) => {
  let test = null;
  if (props.show) {
    test = <h1>{props.name}</h1>;
  } else {
    test = <p>No hay valor</p>
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {test}
          {
            props.show ? (
              <img src={logo} className="App-logo" alt="logo" />
            ) : (
                <img src="http://placehold.it/200x200" className="App-logo" alt="logo" />
              )
          }
          {
            props.name === "Luis" && (
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    {props.name}
                  </p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
 */

const App = ({ name, show, error, notas }) => {
  if (show) {
    return (
      <h1>{name}</h1>
    )
  } else {
    return (
      <>
        {
          !!error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )
        }
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          hic doloremque! Nostrum, hic? Excepturi soluta, debitis beatae atque
          sunt iste. Sit eius animi eligendi praesentium. Iusto incidunt fugit
          voluptas aut!
      </p>
        <ul>
          {
            notas.length > 0 ?
              notas.map((valor, index) => {
                return <li key={index}>{valor}</li>
              })
              : (
                <li>Lista Vacia</li>
              )
          }
        </ul>
      </>
    )
  }
}
App.propTypes = {
  name: PropTypes.string.isRequired,
  show: PropTypes.bool
}

export default App;
