import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import db from "./db"
import RedirectAction from "./Scripts/Redirect";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Recipes_Launch from "./pages/Recipes_Launch";
import Recipes_Breakfast from "./pages/Recipes_Breakfast";
import Recipes_Dinner from "./pages/Recipes_Dinner";

import Recipe_Breakfast_1 from "./pages/Breakfast/Recipe_Breakfast_1";
import Recipe_Breakfast_1_1 from "./pages/Breakfast/Recipe_Breakfast_1_1";
import Recipe_Breakfast_1_2 from "./pages/Breakfast/Recipe_Breakfast_1_2";

import Recipe_Breakfast_2 from "./pages/Breakfast/Recipe_Breakfast_2";
import Recipe_Breakfast_2_1 from "./pages/Breakfast/Recipe_Breakfast_2_1";
import Recipe_Breakfast_2_2 from "./pages/Breakfast/Recipe_Breakfast_2_2";

import Recipe_Launch_1 from "./pages/Launch/Recipe_Launch_1";
import Recipe_Launch_1_1 from "./pages/Launch/Recipe_Launch_1_1";
import Recipe_Launch_1_2 from "./pages/Launch/Recipe_Launch_1_2";
import Recipe_Launch_2 from "./pages/Launch/Recipe_Launch_2";
import Recipe_Launch_2_1 from "./pages/Launch/Recipe_Launch_2_1";
import Recipe_Launch_2_2 from "./pages/Launch/Recipe_Launch_2_2";

import Recipe_Dinner_1 from "./pages/Dinner/Recipe_Dinner_1";
import Recipe_Dinner_1_1 from "./pages/Dinner/Recipe_Dinner_1_1";
import Recipe_Dinner_1_2 from "./pages/Dinner/Recipe_Dinner_1_2"
import Recipe_Dinner_2 from "./pages/Dinner/Recipe_Dinner_2";
import Recipe_Dinner_2_1 from "./pages/Dinner/Recipe_Dinner_2_1";
import Recipe_Dinner_2_2 from "./pages/Dinner/Recipe_Dinner_2_2";




ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/pages/Recipes_Breakfast">
                    <Recipes_Breakfast
                        name1= {db.breakfast[0].name}
                        name2={db.breakfast[1].name}
                        name3="3"
                        photo_circle_1 = {db.breakfast[0].photo_circle}
                        photo_circle_2 = {db.breakfast[1].photo_circle}
                    />
                </Route>
                <Route path="/pages/Recipes_Launch">
                    <Recipes_Launch
                        name1={db.lunch[0].name}
                        name2={db.lunch[1].name}
                        name3="3"
                        photo_circle_1 = {db.lunch[0].photo_circle}
                        photo_circle_2 = {db.lunch[1].photo_circle}
                    />
                </Route>
                <Route path="/pages/Recipes_Dinner">
                    <Recipes_Dinner
                        name1={db.dinner[0].name}
                        name2={db.dinner[1].name}
                        name3="3"
                        photo_circle_1 = {db.dinner[0].photo_circle}
                        photo_circle_2 = {db.dinner[1].photo_circle}
                    />
                </Route>


                <Route path="/pages/Breakfast/Recipe_Breakfast_1" >
                    <Recipe_Breakfast_1
                        about={db.breakfast[0].about}
                        name = {db.breakfast[0].name}
                        ingredients_1 = {db.breakfast[0].ingredients[0]}
                        ingredients_2 = {db.breakfast[0].ingredients[1]}
                        ingredients_3 = {db.breakfast[0].ingredients[2]}
                        ingredients_4 = {db.breakfast[0].ingredients[3]}
                        ingredients_5 = {db.breakfast[0].ingredients[4]}
                        ingredients_6 = {db.breakfast[0].ingredients[5]}
                        ingredients_7 = {db.breakfast[0].ingredients[6]}
                        photo_recipe_breakfast_first_1 = {db.breakfast[0].photo_recipe_1}
                    />
                </Route>
                <Route path="/pages/Breakfast/Recipe_Breakfast_1_1" >
                    <Recipe_Breakfast_1_1
                        step_1 = {db.breakfast[0].steps[0]}
                        step_2 = {db.breakfast[0].steps[1]}
                        step_3 = {db.breakfast[0].steps[2]}
                        step_4 = {db.breakfast[0].steps[3]}
                        step_5 = {db.breakfast[0].steps[4]}
                        coocking_time = {db.breakfast[0].cooking_time}
                        photo_recipe_breakfast_first_2 = {db.breakfast[0].photo_recipe_2}
                    />
                </Route>
                <Route path="/pages/Breakfast/Recipe_Breakfast_1_2" >
                    <Recipe_Breakfast_1_2
                        step_1 = {db.breakfast[0].steps[0]}
                        step_2 = {db.breakfast[0].steps[1]}
                        step_3 = {db.breakfast[0].steps[2]}
                        step_4 = {db.breakfast[0].steps[3]}
                        step_5 = {db.breakfast[0].steps[4]}
                        coocking_time = {db.breakfast[0].cooking_time}
                        photo_recipe_breakfast_first_2 = {db.breakfast[0].photo_recipe_2}
                    />
                </Route>
                <Route path="/pages/Breakfast/Recipe_Breakfast_2">
                    <Recipe_Breakfast_2
                        name = {db.breakfast[1].name}
                        about = {db.breakfast[1].about}
                        ingredients_1 = {db.breakfast[1].ingredients[0]}
                        ingredients_2 = {db.breakfast[1].ingredients[1]}
                        ingredients_3 = {db.breakfast[1].ingredients[2]}
                        ingredients_4 = {db.breakfast[1].ingredients[3]}
                        ingredients_5 = {db.breakfast[1].ingredients[4]}
                        ingredients_6 = {db.breakfast[1].ingredients[5]}
                        ingredients_7 = {db.breakfast[1].ingredients[6]}
                        ingredients_8 = {db.breakfast[1].ingredients[7]}
                        ingredients_9 = {db.breakfast[1].ingredients[8]}
                        ingredients_10 = {db.breakfast[1].ingredients[9]}
                        photo_recipe_breakfast_second_1 = {db.breakfast[1].photo_recipe_1}

                    />
                </Route>


                <Route path="/pages/Breakfast/Recipe_Breakfast_2_1">
                    <Recipe_Breakfast_2_1
                        step_1 = {db.breakfast[1].steps[0]}
                        step_2 = {db.breakfast[1].steps[1]}
                        step_3 = {db.breakfast[1].steps[2]}
                        step_4 = {db.breakfast[1].steps[3]}
                        step_5 = {db.breakfast[1].steps[4]}
                        coocking_time = {db.breakfast[1].cooking_time}
                        photo_recipe_breakfast_second_2 = {db.breakfast[1].photo_recipe_2}
                    />
                </Route>
                <Route path="/pages/Breakfast/Recipe_Breakfast_2_2">
                <Recipe_Breakfast_2_2
                    step_1 = {db.breakfast[1].steps[0]}
                    step_2 = {db.breakfast[1].steps[1]}
                    step_3 = {db.breakfast[1].steps[2]}
                    step_4 = {db.breakfast[1].steps[3]}
                    step_5 = {db.breakfast[1].steps[4]}
                    coocking_time = {db.breakfast[1].cooking_time}
                    photo_recipe_breakfast_second_2 = {db.breakfast[1].photo_recipe_2}
                />
                </Route>

                <Route path="/pages/Launch/Recipe_Launch_1">
                    <Recipe_Launch_1
                        about={db.lunch[0].about}
                        name = {db.lunch[0].name}
                        ingredients_1 = {db.lunch[0].ingredients[0]}
                        ingredients_2 = {db.lunch[0].ingredients[1]}
                        ingredients_3 = {db.lunch[0].ingredients[2]}
                        ingredients_4 = {db.lunch[0].ingredients[3]}
                        ingredients_5 = {db.lunch[0].ingredients[4]}
                        ingredients_6 = {db.lunch[0].ingredients[5]}
                        ingredients_7 = {db.lunch[0].ingredients[6]}
                        ingredients_8 = {db.lunch[0].ingredients[7]}
                        ingredients_9 = {db.lunch[0].ingredients[8]}
                        ingredients_10 = {db.lunch[0].ingredients[9]}
                        ingredients_11= {db.lunch[0].ingredients[10]}
                        ingredients_12= {db.lunch[0].ingredients[11]}
                        ingredients_13= {db.lunch[0].ingredients[12]}
                        photo_recipe_launch_first_1 ={db.lunch[0].photo_recipe_1}
                    />
                </Route>


                <Route path="/pages/Launch/Recipe_Launch_1_1">
                    <Recipe_Launch_1_1
                        step_1 = {db.lunch[0].steps[0]}
                        step_2 = {db.lunch[0].steps[1]}
                        step_3 = {db.lunch[0].steps[2]}
                        step_4 = {db.lunch[0].steps[3]}
                        step_5 = {db.lunch[0].steps[4]}
                        step_6 = {db.lunch[0].steps[5]}
                        step_7 = {db.lunch[0].steps[6]}
                        coocking_time = {db.lunch[0].cooking_time}
                        photo_recipe_launch_first_2 ={db.lunch[0].photo_recipe_2}
                    />
                </Route>
                <Route path="/pages/Launch/Recipe_Launch_1_2">
                    <Recipe_Launch_1_2
                        step_1 = {db.lunch[0].steps[0]}
                        step_2 = {db.lunch[0].steps[1]}
                        step_3 = {db.lunch[0].steps[2]}
                        step_4 = {db.lunch[0].steps[3]}
                        step_5 = {db.lunch[0].steps[4]}
                        step_6 = {db.lunch[0].steps[5]}
                        step_7 = {db.lunch[0].steps[6]}
                        coocking_time = {db.lunch[0].cooking_time}
                        photo_recipe_dinner_first_1 ={db.lunch[0].photo_recipe_1}
                    />
                </Route>
                <Route path="/pages/Launch/Recipe_Launch_2">
                    <Recipe_Launch_2
                        about={db.lunch[1].about}
                        name = {db.lunch[1].name}
                        ingredients_1 = {db.lunch[1].ingredients[0]}
                        ingredients_2 = {db.lunch[1].ingredients[1]}
                        ingredients_3 = {db.lunch[1].ingredients[2]}
                        ingredients_4 = {db.lunch[1].ingredients[3]}
                        ingredients_5 = {db.lunch[1].ingredients[4]}
                        ingredients_6 = {db.lunch[1].ingredients[5]}
                        ingredients_7 = {db.lunch[1].ingredients[6]}
                        ingredients_8 = {db.lunch[1].ingredients[7]}
                        ingredients_9 = {db.lunch[1].ingredients[8]}
                        ingredients_10 = {db.lunch[1].ingredients[9]}
                        ingredients_11= {db.lunch[1].ingredients[10]}
                        ingredients_12= {db.lunch[1].ingredients[11]}
                        ingredients_13= {db.lunch[1].ingredients[12]}
                        photo_recipe_launch_second_1 = {db.lunch[1].photo_recipe_1}

                    />
                </Route>
                <Route path="/pages/Launch/Recipe_Launch_2_1">
                    <Recipe_Launch_2_1
                        step_1 = {db.lunch[1].steps[0]}
                        step_2 = {db.lunch[1].steps[1]}
                        step_3 = {db.lunch[1].steps[2]}
                        step_4 = {db.lunch[1].steps[3]}
                        step_5 = {db.lunch[1].steps[4]}
                        step_6 = {db.lunch[1].steps[5]}
                        step_7 = {db.lunch[1].steps[6]}
                        coocking_time = {db.lunch[1].cooking_time}
                        photo_recipe_launch_second_1 = {db.lunch[1].photo_recipe_2}
                    />
                </Route>
                <Route path="/pages/Launch/Recipe_Launch_2_2">
                    <Recipe_Launch_2_2
                        step_1 = {db.lunch[1].steps[0]}
                        step_2 = {db.lunch[1].steps[1]}
                        step_3 = {db.lunch[1].steps[2]}
                        step_4 = {db.lunch[1].steps[3]}
                        step_5 = {db.lunch[1].steps[4]}
                        step_6 = {db.lunch[1].steps[5]}
                        step_7 = {db.lunch[1].steps[6]}
                        coocking_time = {db.lunch[1].cooking_time}
                        photo_recipe_launch_second_1 = {db.lunch[1].photo_recipe_2}
                    />
                </Route>

                <Route path="/pages/Dinner/Recipe_Dinner_1">
                    <Recipe_Dinner_1
                        about={db.dinner[0].about}
                        name = {db.dinner[0].name}
                        ingredients_1 = {db.dinner[0].ingredients[0]}
                        ingredients_2 = {db.dinner[0].ingredients[1]}
                        ingredients_3 = {db.dinner[0].ingredients[2]}
                        ingredients_4 = {db.dinner[0].ingredients[3]}
                        ingredients_5 = {db.dinner[0].ingredients[4]}
                        ingredients_6 = {db.dinner[0].ingredients[5]}
                        photo_recipe_dinner_first_1 = {db.dinner[0].photo_recipe_1}
                    />
                </Route>
                <Route path="/pages/Dinner/Recipe_Dinner_1_1">
                    <Recipe_Dinner_1_1
                        step_1 = {db.dinner[0].steps[0]}
                        step_2 = {db.dinner[0].steps[1]}
                        step_3 = {db.dinner[0].steps[2]}
                        step_4 = {db.dinner[0].steps[3]}
                        step_5 = {db.dinner[0].steps[4]}
                        step_6 = {db.dinner[0].steps[5]}
                        step_7 = {db.dinner[0].steps[6]}
                        coocking_time = {db.dinner[0].cooking_time}
                        photo_recipe_dinner_first_1 = {db.dinner[0].photo_recipe_2}
                    />
                </Route>
                <Route path="/pages/Dinner/Recipe_Dinner_1_2">
                    <Recipe_Dinner_1_2
                        step_1 = {db.dinner[0].steps[0]}
                        step_2 = {db.dinner[0].steps[1]}
                        step_3 = {db.dinner[0].steps[2]}
                        step_4 = {db.dinner[0].steps[3]}
                        step_5 = {db.dinner[0].steps[4]}
                        step_6 = {db.dinner[0].steps[5]}
                        step_7 = {db.dinner[0].steps[6]}
                        coocking_time = {db.dinner[0].cooking_time}
                        photo_recipe_dinner_first_2 = {db.dinner[0].photo_recipe_2}
                    />
                </Route>

                <Route path="/pages/Dinner/Recipe_Dinner_2">
                    <Recipe_Dinner_2
                        about={db.dinner[1].about}
                        name = {db.dinner[1].name}
                        ingredients_1 = {db.dinner[1].ingredients[0]}
                        ingredients_2 = {db.dinner[1].ingredients[1]}
                        ingredients_3 = {db.dinner[1].ingredients[2]}
                        ingredients_4 = {db.dinner[1].ingredients[3]}
                        ingredients_5 = {db.dinner[1].ingredients[4]}
                        ingredients_6 = {db.dinner[1].ingredients[5]}
                        ingredients_7 = {db.dinner[1].ingredients[6]}
                        ingredients_8 = {db.dinner[1].ingredients[7]}
                        ingredients_9 = {db.dinner[1].ingredients[8]}
                        photo_recipe_dinner_first_1 =  {db.dinner[1].photo_recipe_1}
                    />
                </Route>
                <Route path="/pages/Dinner/Recipe_Dinner_2_1">
                    <Recipe_Dinner_2_1
                        step_1 = {db.dinner[1].steps[0]}
                        step_2 = {db.dinner[1].steps[1]}
                        step_3 = {db.dinner[1].steps[2]}
                        step_4 = {db.dinner[1].steps[3]}
                        step_5 = {db.dinner[1].steps[4]}
                        step_6 = {db.dinner[1].steps[5]}
                        step_7 = {db.dinner[1].steps[6]}
                        coocking_time = {db.dinner[1].cooking_time}
                        photo_recipe_dinner_first_1 = {db.dinner[1].photo_recipe_2}

                    />
                </Route>
                <Route path="/pages/Dinner/Recipe_Dinner_2_2">
                    <Recipe_Dinner_2_2
                        step_1 = {db.dinner[1].steps[0]}
                        step_2 = {db.dinner[1].steps[1]}
                        step_3 = {db.dinner[1].steps[2]}
                        step_4 = {db.dinner[1].steps[3]}
                        step_5 = {db.dinner[1].steps[4]}
                        step_6 = {db.dinner[1].steps[5]}
                        step_7 = {db.dinner[1].steps[6]}
                        coocking_time = {db.dinner[1].cooking_time}
                        photo_recipe_breakfast_first_2 = {db.dinner[1].photo_recipe_2}

                    />
                </Route>
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
