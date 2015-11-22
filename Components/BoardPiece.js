import BoardStore from '../Stores/BoardStore';
import Actions from '../Actions/BoardActions';

let BoardPiece = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        status: React.PropTypes.number.isRequired,
        type: React.PropTypes.string.isRequired,
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired
    },

    getInitialState() {
        return {};
    },

    getStyles() {
        return {
            "width": "100px",
            "height": "100px",
            "background": "#fff",
            "display": "inline-block",
            "outline":"1px solid black"
        };
    },

    changeStatus() {
        Actions.changeStatus(this.props.id,1);
    },

    render() {
        return (
            <div style={this.getStyles()} onClick={this.changeStatus}>
                id:{this.props.id}, x:{this.props.x}, y:{this.props.y}, s:{this.props.status}
            </div>
        );
    }
});

export default BoardPiece;