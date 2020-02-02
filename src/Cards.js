import React from 'react';
import './Cards.css';


class Cards extends  React.Component {

    constructor(props) {
      super(props);
      this.state = { cardHolder: "Foulen", 
                      validThru: "11/05",
                     cardNumber: "7253  3256  7895  1245"
                };
    }

    traimentCardHolder = (event) => {
        const regex = /^([a-zA-Z áàâäãéèêëíìîïóòôöõúùûü\\'-]{5,20})$/;
        
        if (regex.test(event.target.value)){
                 this.setState({cardHolder: event.target.value.toUpperCase()})
            }
    }

    traimentCardNumber = (event) => {
        const regex = /^([0-9 -*+/]{16,20})$/;
         if (regex.test(event.target.value)){
            let regex = /^[0-9]$/;
            var str = event.target.value.split("").filter(el => (el !== ' ' && regex.test(el)));
          
            let strFinal ='';
            for(let i=0;i<16; i++)if(i%4)strFinal = strFinal + str[i]; else strFinal = strFinal + '  ' + str[i];
                 this.setState({cardNumber: strFinal})
            }
    }

    traimentValidThru = (event) => {

        const regex1 = /^([0-9-_/ ]*)$/;
        if (regex1.test(event.target.value)){
            
            this.setState({validThru: ''});
            let regex2 = /^([0-9]{1})$/;
            var str = event.target.value.split("").filter(elt => regex2.test(elt));
            // console.log(str);
            
        if(str.length>=4){
            let res1 = '',res2= '', strFinal = '' ;
            res1 = str[0] + str[1];if((res1>12) && (res1<=0)) res1=0;
            res2 = str[str.length-2] + str[str.length-1];
            strFinal = res1 + '/'+ res2; 
            this.setState({validThru: strFinal});
            }       
        }            
    }

 
    render() {
    return(
        <div>
        <div className="container-fluid">
            <div className='title row'> 
                <h1 className="col-md-12">Company name</h1> 
            </div>
            <div className="row">
                <div className="puce col-md-3">
                        <img src="./img/puce-mastercard.jpg" alt=" " />
                </div>  
            </div>
            <div className="card-chiffre chiffre">
                    <span className="card-number1 col-md-10">{this.state.cardNumber}</span>
            </div>

                <div className="card-chiffre">   
                    <div className="card-number2">
                            <div className="partie-left"><span>5422</span>
                                <div className="cardholder">
                                    <h2>{this.state.cardHolder}</h2>
                                </div>
                            </div>
                            <div className="partie-right">
                                <span className="date-validite">
                                    <div className="item item-left">
                                        <div className="sub-item" >
                                            <span>VALID</span> <span>THRU</span>
                                        </div>
                                        <div className="sub-item">
                                            <span> <i className="fa fa-caret-right"></i></span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <span >MONTH / YEAR</span><br/>
                                        <span className="date-expiration">{this.state.validThru}</span>
                                    </div>
                                </span>
                            </div>  
                    </div>
                    <div className="img-Mastervisa col-md-2">
                        <img src="./img/visa-mastercard.jpg" alt=" " width="160" height="210" />
                    </div>
                </div> 
        </div>
        
        <div className='container'>
                <div className="row">
                    <span className="spanwidth">Card Number </span>
                    <input type='text' name="cardNumber" placeholder="XXXX XXXX XXXX XXXX" onChange={this.traimentCardNumber} />
                </div>

                <div className="row">
                    <span className="spanwidth">Valid Thru </span>
                    <input type='text' name="validThru" placeholder="XX/XX"  onChange={(event)=>this.traimentValidThru(event)} /> 
                </div>

                <div className="row">
                    <span className="spanwidth">Card Holder </span>
                    <input type='text' name="cardHolder"  onChange={(event)=>this.traimentCardHolder(event)} />
                </div>
        </div>
    </div>
    )
    }
} 
export default Cards;