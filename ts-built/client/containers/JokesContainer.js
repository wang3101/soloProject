"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const actions = require("../actions/actions");
const JokesDisplay_1 = require("../components/JokesDisplay");
const mapStateToProps = (state) => ({
    setup: state.setup,
    delivery: state.delivery,
});
const mapDispatchToProps = (dispatch) => ({
    newJoke: () => {
        dispatch(actions.newJoke());
    },
    saveJoke: (joke) => {
        dispatch(actions.saveJoke(joke));
    },
});
class JokesContainer extends react_1.Component {
    render() {
        console.log('jokes container props', this.props);
        return (React.createElement("div", { className: "innerbox" },
            React.createElement(JokesDisplay_1.default, { jokes: this.props })));
    }
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(JokesContainer);
//# sourceMappingURL=JokesContainer.js.map