import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper} from "@material-ui/core"

import Breakfast from './image/Breakfast.jpg'
import Lunch from './image/Lunch.jpg'
import Dinner from './image/Dinner.jpg'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import About from "./pages/jjson";
import Main from "./pages/Main"



var imageItem1 = {
    backgroundImage: "url(" + Breakfast + ")"
};
var imageItem2 = {
    backgroundImage: "url(" + Lunch + ")"
};
var imageItem3 = {
    backgroundImage: "url(" + Dinner + ")"
};


function App() {
    return (
        <div>
            <div><h1 className="headerText">
                Книга Вкуса
            </h1></div>
            <div className="content">

                <div className="ItemCon">
                    <Grid container spacing={9}
                          direction="row"
                          justify="center"
                          alignItems="center">
                        <Grid item  sm={4}>
                            <a href='/pages/Home'>
                            <div className="ItemCircle" style={imageItem1}>
                                <div className="ItemName">
                                    Завтрак
                                </div>
                            </div>
                            </a>
                        </Grid>
                        <Grid item  sm={4}>
                            <div className="ItemCircle" style={imageItem2}><div className="ItemName">Обед</div></div>

                        </Grid>
                        <Grid item  sm={4}>
                            <div className="ItemCircle" style={imageItem3}><div className="ItemName">Ужин</div></div>

                        </Grid>

                    </Grid>
                </div>

            </div>
        </div>
    )};

export default App;
