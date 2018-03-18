import React from 'react';

class NumberList extends React.Component  {

    constructor(props){
        super(props);
        this.state= {list:[1,2,3,4,5]};
    }

    render(){
        const mapedList = this.state.list.map((number) => 
        <li key={number.toString()}>{number*2}</li>    
    )

        return (<div>Hello from Number List
            {mapedList}
        </div>)
    }
}

export default NumberList;