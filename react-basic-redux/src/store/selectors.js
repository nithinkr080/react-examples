import { inc, increment, ui } from "./action";
import { connect } from "react-redux";
import Counter from "../Counter";

const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count,
    show: state.uiReducer.ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(inc()),
    increment: (data) => dispatch(increment(data)),
    ui: () => dispatch(ui()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
