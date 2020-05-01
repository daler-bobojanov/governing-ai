import React, { Component } from 'react';
import Politic from './Politic';
import Disability from './Disability';

class Politics extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Politic />
            <Disability />
        </div> );
    }
}
 
export default Politics;