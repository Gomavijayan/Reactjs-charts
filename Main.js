import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import DoughnutChart from './components/DoughnutChart';
import PieChart from './components/PieChart';
import Form1 from "./Form1";
import "./Main.css";

class Main extends Component {
    state = {  }
    render() { 
        return (
        <HashRouter>
            <div class ="hi">
               <h1><b>Graphical Representation</b></h1>
              <ul className="header">
                <li><NavLink to="/"><b></b>BarChart</NavLink></li>
                <li><NavLink to="/Linechart"><b></b>LineChart</NavLink></li>
                <li><NavLink to="/Doughnutchart"><b></b>DoughnutChart</NavLink></li>
                <li><NavLink to="/Piechart"><b></b>PieChart</NavLink></li>
                <li><NavLink to="/Form1"><b>Form</b></NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={BarChart}/>
                <Route exact path="/LineChart" component={LineChart}/>
                <Route exact path="/DoughnutChart" component={DoughnutChart}/>
                <Route exact path="/PieChart" component={PieChart}/>
                <Route path="/Form1" component={Form1}/>
              </div>
            </div>
          </HashRouter>
          );
    }
}
 
export default Main;