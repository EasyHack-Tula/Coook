import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper} from "@material-ui/core"

import Breakfast from './image/Breakfast.jpg'
import Lunch from './image/Lunch.jpg'
import Dinner from './image/Dinner.jpg'


//------------------------------------------------


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
            <div className="content">
                <h1 className="headerText">
                    Книга Вкуса
                </h1>
                <div className="ItemCon">
                    <Grid container spacing={8}>
                        <Grid item xs={4} sm={3}>
                            <div className="ItemCircle" style={imageItem1}><div className="ItemName">Завтрак</div></div>

                        </Grid>

                    </Grid>
                </div>

            </div>
        </div>
    );
}

export default App;
