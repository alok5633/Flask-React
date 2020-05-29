import React,{Component} from 'react';
import axios from 'axios';




export class SuggestedInput extends Component {
     myfunction(){
       alert('Button Clicked')
       console.log("clicked")
       var i=document.getElementById('input').value
       console.log(i)

       return axios
        .get('/getMedicines', {
            headers: { "Content-type": "application/json" }
        })
        .then(res => {
            /*
            var data = []
            Object.keys(res.data).forEach((key) => {
                var val = res.data[key]
                data.push([val.title, val.id])
            })
            */

            console.log(res.data)
        })

     }
     render(){
       
       return(
        <div className="inputsearch">
        
            <div>
              <div class="inner-addon left-addon">
              <i class="glyphicon glyphicon-user"></i>
              <input id="input" type="search" placeholder="Type a drug name (like Atorvastin,Sildenafil,etc)"  />
              <button className="search" type="submit" onClick={this.myfunction}>FIND THE LOWEST PRICES</button>
              </div>
              
            </div>
        </div>
       )
     }
}

//export default SuggestedInput
      





