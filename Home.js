import React ,{ Component } from "react";

class Home extends Component{

    constructor(props){
        super(props);
    }
     state={
        name : "DAN"
    }
    render(){
    return <div> {this.state.name}</div>;
}

}
export default Home;