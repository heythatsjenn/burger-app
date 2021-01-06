import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.show !== this.props.show){
            return true;
        }
    }

    componentDidUpdate(){
        console.log('hello, i updated')
    }

    render() { 
        return ( 
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={() => this.props.purchaseHandler(false)}/>
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show? 1 : 0
                    }}
                >
                    {this.props.children}
                </div> 
            </Auxiliary>
        );
    }
}
 
export default Modal;