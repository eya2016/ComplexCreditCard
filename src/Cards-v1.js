import React from 'react';
import './Cards.css';

function Cards (){
    return(
        <div className="container-fluid">
            <div className='title row'> 
                <h1 className="col-md-12">CREDIT CARD</h1> 
            </div>
            <div className="row">
                <div className="puce col-md-3">
                        <img src="./img/puce-mastercard.jpg" alt=" " />
                </div>  
            </div>
            <div className="card-chiffre">
                <div className="chiffre col-md-10">
                    <div className="row"><span className="card-number1 col-md-11">7253&nbsp; 3256&nbsp; 7895&nbsp; 1245</span></div>
                    <div className="card-number2">
                        <div className="partie-left">
                            <span>5422</span>
                            <div className="cardholder">
                                    <h2> CARDHOLDER</h2>
                            </div>
                        </div>
                        <div className="partie-right">
                            <span className="date-validite">
                                <div className="item item-left">
                                    <div className="sub-item" >
                                        <span>VALID</span>
                                        <span>THRU</span>
                                    </div>
                                    <div className="sub-item">
                                        <span> 
                                            <i className="fa fa-caret-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <span >MONTH / YEAR</span><br/>
                                    <span className="date-expiration"> 11/50</span>
                                </div>
                            </span>
                        </div>  
                    </div>
                </div>
                <div className="img-Mastervisa col-md-2">
                    <img src="./img/visa-mastercard.jpg" alt=" " width="160" height="210" />
                </div>
            </div>
        </div>
    )
} 
export default Cards;