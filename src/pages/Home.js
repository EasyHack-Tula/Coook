import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const useStyles2 = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));


export default  function CheckboxesGroup() {
    const classes2 = useStyles2();
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
    }); //начальные настройки

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }; //изменение состояния

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 3; //условие выполнения чекбоксов

    return (
        <div className={classes2.root}>
            <FormControl required error={error} component="fieldset" className={classes2.formControl}>
                <FormLabel component="legend">Отметьте все шаги</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                        label="Antoine Llorca"
                    />
                </FormGroup>
                <FormHelperText>Отметьте все шаги</FormHelperText>
            </FormControl>
            <Button variant="contained" color="primary" disabled={error}>
                Primary
            </Button>
        </div>
    );
}
