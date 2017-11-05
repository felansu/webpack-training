import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {menuStyle} = style;

        return (
            <div style={menuStyle}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/componentB'>ComponentB</Link></li>
            </div>
        );
    }
}

const style = {
    menuStyle: {
        color: 'red',
        display: 'flex',
        justifyContent: 'space-around',
        textDecoration: 'none'
    }
};

export default Header;