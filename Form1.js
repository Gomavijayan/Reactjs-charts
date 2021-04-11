import React,{Component} from "react";
class Form1 extends Component{
    state={
        xAxes:'',
        yAxes:'',
              

    };
    handleChange=(event)=>{
        this.setState({xAxes:event.target.value});
         };
    handleChange1=(event)=>{
        this.setState({yAxes:event.target.value});
        };
       
    handleSubmit=(event)=>{
        alert('xAxes '+ this.state.xAxes+'\n'  +'yAxes: '+ this.state.yAxes+'\n');
        
        event.preventDefault();
    };
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    xAxes:
                    <input type="integer" value={this.state.xAxes} onChange={this.handleChange}/>
                 </label><br></br>
                 <label>
                    yAxes:
                    <input type="integer" value={this.state.yAxes} onChange={this.handleChange1}/>
                 </label><br></br>
                
                                 
                <input type="Reset" value="Reset"></input> 

                <input type="submit" value="submit"></input>

            </form>
        );
    }
}
export default Form1;