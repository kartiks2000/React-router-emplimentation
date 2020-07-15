import React from 'react';
import Aux from '../Aux/Aux';
import './Addmobile.css';

const Addmobile = (props) => {

    var temp = {company : null,
     model : null,
      ram : "4gb",
       waterproof : true,
        multicamerasetup : true,
         internationalwarrenty : true,
          retinascan : true,
           exynox : true,
            snapdragon : false,
             gorillaglass : true,
              wirelesscharging : true,
               id : "hwe32ewejn"};


    const companychange = (e) => {
        temp.company = e.target.value;
    }   

    const modelchange = (e) => {
        temp.model = e.target.value;
    }  
    
    const ramchange = (e) => {
        temp.ram = e.target.value;
    } 

    const multicamerasetupchange = (e) => {
        if(e.target.value==1){
            temp.multicamerasetup = true;
        }
        else{
            temp.multicamerasetup = false;
        }
    }

    const waterproofchange = (e) => {
        if(e.target.value==1){
            temp.waterproof = true;
        }
        else{
            temp.waterproof = false;
        }
    }

    const internationalwarrentychange = (e) => {
        if(e.target.value==1){
            temp.internationalwarrenty = true;
        }
        else{
            temp.internationalwarrenty = false;
        }
    }

    const retinascanchange = (e) => {
        if(e.target.value==1){
            temp.retinascan = true;
        }
        else{
            temp.retinascan = false;
        }
    }

    const exynoxchange = (e) => {
        if(e.target.value==1){
            temp.exynox = true;
        }
        else{
            temp.exynox = false;
        }
    }

    const snapdragonchange = (e) => {
        if(e.target.value==1){
            temp.snapdragon = true;
        }
        else{
            temp.snapdragon = false;
        }
    }

    const gorillaglasschange = (e) => {
        if(e.target.value==1){
            temp.gorillaglass = true;
        }
        else{
            temp.gorillaglass = false;
        }
    }

    const wirelesschargingchange = (e) => {
        if(e.target.value==1){
            temp.wirelesscharging = true;
        }
        else{
            temp.wirelesscharging = false;
        }
    }
         
    const addit = () => {
        temp.id = temp.company + temp.model;
        props.addmob(temp);
        // console.log(temp);
    }

    return( 
        <Aux>
            <div className="Addmobile">
                <h1 className="heading">Add a device</h1>
                <div className="part">
                    <label htmlFor="company">Company :</label>
                    <input onChange={companychange} id="company" type="text"></input>
                </div>
                <div className="part">
                    <label htmlFor="model">Model :</label>
                    <input onChange={modelchange} id="model" type="text"></input>
                </div>
                <div className="part">
                    <label htmlFor="ram">RAM :</label>
                    <input onChange={ramchange} id="ram" type="text"></input>
                </div>
                <div className="part">
                    <h3>Multicamerasetup :</h3>
                    <div className="part1">
                        <label htmlFor="multicamerasetupyes">YES :</label>
                        <input type="radio" id="multicamerasetupyes" name="multicamerasetup" value="1" onChange={multicamerasetupchange}></input>
                    </div>
                    <div className="part2">
                        <label htmlFor="multicamerasetupno">NO :</label>
                        <input type="radio" id="multicamerasetupno" name="multicamerasetup" value="0" onChange={multicamerasetupchange}></input>
                    </div>
                </div>

                <div className="part">
                    <h3>Waterproof :</h3>
                    <div className="part1">
                        <label htmlFor="waterproofyes">YES :</label>
                        <input type="radio" id="waterproofyes" name="waterproof" value="1" onChange={waterproofchange}></input>
                    </div>
                    <div className="part2">
                        <label htmlFor="waterproofno">NO :</label>
                        <input type="radio" id="waterproofno" name="waterproof" value="0" onChange={waterproofchange}></input>
                    </div>
                </div>

                <div className="part">
                    <h3>International Warrenty :</h3>
                    <div className="part1">
                        <label htmlFor="internationalwarrentyyes">YES :</label>
                        <input type="radio" id="internationalwarrentyyes" name="internationalwarrenty" value="1" onChange={internationalwarrentychange}></input>
                    </div>
                    <div className="part2">
                        <label htmlFor="internationalwarrentyno">NO :</label>
                        <input type="radio" id="internationalwarrentyno" name="internationalwarrenty" value="0" onChange={internationalwarrentychange}></input>
                    </div>
                </div>

                <div className="part">
                    <h3>Retinascan :</h3>
                    <div className="part1">
                        <label htmlFor="retinascanyes">YES :</label>
                        <input type="radio" id="retinascanyes" name="retinascan" value="1" onChange={retinascanchange}></input>
                    </div>
                    <div className="part2">
                        <label htmlFor="retinascanno">NO :</label>
                        <input type="radio" id="retinascanno" name="retinascan" value="0" onChange={retinascanchange}></input>
                    </div>
                </div>

                <div className="part">
                    <h3>Exynox :</h3>
                    <div className="part1">
                        <label htmlFor="exynoxyes">YES :</label>
                        <input type="radio" id="exynoxyes" name="exynox" value="1" onChange={exynoxchange}></input>
                    </div>
                    <div className="part2">
                        <label htmlFor="exynoxno">NO :</label>
                        <input type="radio" id="exynoxno" name="exynox" value="0" onChange={exynoxchange}></input>
                    </div>
                </div>

                <div className="part">
                    <h3>Snapdragon :</h3>
                    <div className="part1">
                        <label htmlFor="snapdragonyes">YES :</label>
                        <input type="radio" id="snapdragonyes" name="snapdragon" value="1" onChange={snapdragonchange}></input>
                    </div>
                    <div className="part2">
                        <label htmlFor="snapdragonno">NO :</label>
                        <input type="radio" id="snapdragonno" name="snapdragon" value="0" onChange={snapdragonchange}></input>
                    </div>
                </div>

                <div className="part">
                    <h3>Gorilla glass :</h3>
                    <div className="part1">
                        <label htmlFor="gorillaglassyes">YES :</label>
                        <input type="radio" id="gorillaglassyes" name="gorillaglass" value="1" onChange={gorillaglasschange}></input>
                    </div>
                    <div className="part2">
                        <label htmlFor="gorillaglassno">NO :</label>
                        <input type="radio" id="gorillaglassno" name="gorillaglass" value="0" onChange={gorillaglasschange}></input>
                    </div>
                </div>

                <div className="part">
                    <h3>Wireless charging :</h3>
                    <div className="part1">
                        <label htmlFor="wirelesschargingyes">YES :</label>
                        <input type="radio" id="wirelesschargingyes" name="wirelesscharging" value="1" onChange={wirelesschargingchange}></input>
                    </div>
                    <div className="part2">
                        <label htmlFor="wirelesschargingno">NO :</label>
                        <input type="radio" id="wirelesschargingno" name="wirelesscharging" value="0" onChange={wirelesschargingchange}></input>
                    </div>
                </div>
            </div>
            <button onClick={addit}>ADD</button>
        </Aux>
    );
}

export default Addmobile;