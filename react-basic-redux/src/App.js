import "./App.css";
import Selectors from "../src/store/selectors";

function App(props) {
  return (
    <div className="App">
      <Selectors />
    </div>
  );
}
export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
