import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper} from "@material-ui/core"
import { motion, AnimatePresence } from "framer-motion"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Menu.css'

import Breakfast from './image/Breakfast.jpg'
import Lunch from './image/Lunch.jpg'
import Dinner from './image/Dinner.jpg'






var imageItem1 = {
    backgroundImage: "url(" + Breakfast + ")"
};
var imageItem2 = {
    backgroundImage: "url(" + Lunch + ")"
};
var imageItem3 = {
    backgroundImage: "url(" + Dinner + ")"
};



function Main() {
    return (
        <div>
            <motion.div animate={{y: -1000, opacity:0}} transition={{duration: 3}} className="Welcome"> Добро пожаловать</motion.div>
            <div>
                <h1 className="headerText">
                Книга Вкуса
                </h1>
            </div>
            <div className="content">

                <div className="ItemCon">
                    <Grid container spacing={9}
                          direction="row"
                          justify="center"
                          alignItems="center">
                        <Grid item  sm={4}>

                            <Link to ='/pages/Recipes_Breakfast'>
                            <div className="ItemCircle" style={imageItem1}>
                                <div className="ItemName">
                                    Завтрак
                                </div>
                            </div>
                            </Link>
                        </Grid>
                        <Grid item  sm={4}>
                            <Link to ='/pages/Recipes_Launch'>
                            <div className="ItemCircle" style={imageItem2}>
                                <div className="ItemName">
                                    Обед
                                </div>
                            </div>
                            </Link>
                        </Grid>
                        <Grid item  sm={4}>
                            <Link to ='/pages/Recipes_Dinner'>
                            <div className="ItemCircle" style={imageItem3}>
                                <div className="ItemName">
                                    Ужин
                                </div>
                            </div>
                            </Link>
                        </Grid>

                    </Grid>
                </div>

            </div>
        </div>
    )};

export default Main;
