import React, { Component } from 'react';

class Functions extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }
    add = () =>{
        console.log("HOLI!");
    }
}

export default Functions;