import React from 'react';
import Enums from '../../Enums.js';
import SubHeader from './sub-module.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tokenStateProperty: "React component headline here"
        };
    };
    //=== Mounting lifecycle
    componentWillMount() {
        //console.log("componentWillMount")
    };
    componentDidMount() {
        //console.log("componentDidMount");
    };

    //=== Update lifecycle 
    componentWillReceiveProps(nextProps) {
        // console.log("componentWillReceiveProps: nextProps ",nextProps)
    };
    componentWillUpdate() {
        //console.log("componentWillUpdate");
    };
    //=== Unmount lifecycle
    componentWillUnmount() {
        //console.log("componentWillUnmount");
    };
    componentDidUpdate() {
        //console.log("componentDidUpdate");
    };
    //=== Render
    render() {
        return (<div className="common-header">
            <p>Header: React component</p>
            <div className="main-header">
                {this.props.headline}
            </div>
            <div className='sub-header'>
                {this.props.subHeadline}
            </div>
            <SubHeader />

        </div>);
    }
}
// Default state and props
Header.defaultProps = {
    headline: "This is the default headline",
    subHeadline: "The subHeadline"
};

export default Header;
