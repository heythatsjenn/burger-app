import Auxiliary from "../../hoc/Auxiliary";
import React, { Component } from 'react';
import classes from "./Layout.css"
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class layout extends Component {
    state = { 
        showSideDrawer : false,
     }

    closeSideDrawer = () =>{
        console.log('hello, Ive been clicked')
        this.setState({showSideDrawer : false})
    }

    openSideDrawer = () =>{
        console.log('open meeee')
        this.setState({showSideDrawer : true});
    }

    render() { 
        return ( 
            <Auxiliary>
                <Toolbar open={this.openSideDrawer}/>
                <SideDrawer showSideDrawer={this.state.showSideDrawer} closed={this.closeSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary> 
        );
    }
}
 
export default layout;
