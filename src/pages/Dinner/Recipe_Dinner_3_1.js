import React from 'react';
import Image1 from '../../image/rec1_1.jpg'
//import CustomizedSteppers from "../Scripts/CustomizedSteppers"
import '../../Recipe.css'
import ProgressBar from '../ProgressBar'
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core";




var ImageBack1 = {
    backgroundImage: "url(" + Image1 + ")"
};



const  useStyle = makeStyles((theme)  => ({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: theme.spacing(2),
        maxWidth: "70%" }
}));

function Recipe_Dinner_3_1() {
    const classes = useStyle();

    return (
        <div>
            <ProgressBar it={25}/>
            <div className="RecImg" style={ImageBack1}></div>
            <div className="Container">
                <div className='nameBox'>
                    <div className="NameText">1 Этап</div>
                    <div className="underText"></div>
                </div>
                <div className="TextBox">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum rutrum elit. Quisque non tortor velit. Sed aliquam, enim ut efficitur consequat, leo nulla posuere turpis, vitae aliquet erat quam id est. Aliquam erat volutpat. Sed vel lectus pellentesque, ultrices velit et, molestie velit. Proin sed sapien purus. Ut ipsum neque, accumsan vel ante quis, vehicula fringilla est. Mauris sit amet gravida tellus, eu tempus metus. Sed cursus felis in dolor condimentum, eget luctus augue facilisis. Morbi non ex hendrerit, blandit eros id, tempor lectus.

                    Nulla et rutrum augue. Donec vel augue ante. Nunc posuere quam sit amet consequat hendrerit. Proin a metus vitae elit condimentum ornare vel id ligula. Nullam mollis libero ut fermentum ullamcorper. Quisque sed odio augue. Etiam laoreet felis eu vehicula blandit.
                </div>
                <div class="IngredientsBox">
                    <div className="ingr">Чек-лист</div>
                    <div className="IngrGrid">
                        <div className={classes.container}>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="1" className="checkbox" /><label for="1" className="nPr"> Хлеб</label>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="2" className="checkbox" /><label for="2" className="nPr"> Хлеб</label>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="3" className="checkbox" /><label for="3" className="nPr"> Хлеб</label>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="4" className="checkbox" /><label for="4" className="nPr"> Хлеб</label>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="5" className="checkbox" /><label for="5" className="nPr"> Хлеб</label>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="Button">Продолжить</div>

            </div>
        </div>
    );

}

export default Recipe_Dinner_3_1;
