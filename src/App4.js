import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        backgroundColor: "red"
    }
});

class ClassComponent extends Component {
    state = {
        searchNodes: ""
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>Hello!</div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ClassComponent);