import React ,{ Component } from "react";

class Counter extends Component {
    state = {
        counter:0
      } 
      setCounter(v,counter){
        v>0? counter++ :counter-- 
        this.setState({counter})
    }
        renderCounter(counter){
            if (counter<0)
            return <p> "Is Not Pulsivy"</p>
        }
         renderBtn(counter){
         return <div> <button onClick ={()=>this.setCounter(1,counter)}className="btn btn-success"> Plus +</button> 
         <button onClick ={()=>this.setCounter(-1,counter)}className="btn btn-danger"> Minus -</button> 
         </div>
         }
    render() { 
        return ( <div>
              {<p>{this.state.counter}</p>}
             { this.renderCounter(this.state.counter)}
            {this.renderBtn(this.state.counter)}

        </div>
            
                
    );
    }
}
 
export default Counter;
