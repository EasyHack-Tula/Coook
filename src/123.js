import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import App2 from "./App2";
import {withStyles} from "@material-ui/core/styles";




const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: 50,
    },
})
class CheckboxesGroup2 extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            gilad: false,
            jason: false,
            antoine: false,
            error: ([this.props.gilad, this.props.jason, this.props.antoine].filter((v) => v)).length !== 3,
        })
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e)  {
        this.setState( {[e.target.name]: e.target.checked})
        this.setState({error: <App2 a={this.state.gilad} b={this.state.jason} c={this.state.antoine}/>})
    }


    render() {
        console.log(this.state.error);
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <FormControl required error={this.state.error} component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Отметьте все шаги</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={this.state.gilad} onChange={this.handleChange} name="gilad" />}
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.jason} onChange={this.handleChange} name="jason" />}
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.antoine} onChange={this.handleChange} name="antoine" />}
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>Отметьте все шаги</FormHelperText>
                </FormControl>
            </div>
        )
    }
}


export default withStyles(styles, {withTheme:true})(CheckboxesGroup2);