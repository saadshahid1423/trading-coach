import React from 'react';
import Logo from '../../images/logo.png'
import ScreenShot from '../../images/screenshot.jpg'
import Marquee from 'react-text-marquee';
import '../../App.css';

class Home extends React.Component{

    render(){
        return(
            <div className="back">
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
            <a class="navbar-brand" ><img style={{marginLeft:"-10%"}} src={Logo} width="300px" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
            </div>
            </div>
            </nav>
            <div className="container">
            <div className="row">
            <div className="col-md-3 userinfo">
            <h1 className="userhead">User Info</h1>
            <p className="details userhead">Name: Hello World</p>
            <p className="details">Name: Hello World</p>
            <p className="details">Name: Hello World</p>
            <p className="details">Name: Hello World</p>
            </div>
            <div className="col-md-3">
            <img src={ScreenShot} className="ssimg" />
            </div>
            <div className="col-md-3 buysell">
            <button type="button" class="btn btn-success buysellbutt userhead1">Buy</button><br/><br/>
            <button type="button" class="btn btn-danger buysellbutt">Sell</button><br/><br/>
            <div>
              <p className="details">Buy: 2$</p>
              <p className="details">Sell: 5$</p>
              <p className="details">Profit: 50$</p>
              <p className="details">Loss: 20$</p>
            </div>
            
            </div>
            </div>
            </div>

            <div style={{paddingBottom:"5%"}} className="container ">
            <div className="row">
            <div className="col-md-3 userinfo1">
            <h1>Ads</h1>
            </div>
            <div className="col-md-3 secondarydiv">
              <div style={{display:"flex"}}>
              <div style={{marginTop:"0%"}} className="secondaryback">Secondary Chart</div>
              <div style={{marginTop:"0%"}}   className="secondaryback secondaryback2">Secondary Chart</div>
              </div>                
              <div style={{display:"flex"}}>
              <div style={{marginLeft:"0%"}}  className="secondaryback">Secondary Chart</div>
              <div style={{marginLeft:"0%"}}   className="secondaryback secondaryback2">Secondary Chart</div> 
              </div>               
            </div>
            <div className="col-md-3">
            <marquee className="marquee" direction="down" scrollamount="2">This is an example news.</marquee>
            </div>
            </div>
            </div>

            </div>
        );
    };
};

export default Home;