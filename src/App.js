import './App.css';
import Form from './components/form';
import updateStoreReduxCore from "./redux/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function App(props) {
  return (
      <div className="App">
        <Form state={props.state} updateStoreReduxCore={props.updateStoreReduxCore} />
      </div>
  );
}
function mapStateToProps(store){
  return {
    state: store,
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateStoreReduxCore: bindActionCreators(updateStoreReduxCore, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
