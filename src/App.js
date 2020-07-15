import React,{ useState } from 'react';
import './App.css';
import Mobile from './Mobile/Mobile';
import Aux from './Aux/Aux';
import Addmobile from './Addmobile/Addmobile';
import Welcome from './Welcome/Welcome';
import Thankyou from './Welcome/Thankyou';
import { BrowserRouter , Route ,Link } from 'react-router-dom';

function App() {

  // eslint-disable-next-line
const [mobile,setmobile] = useState([
  {company : "samsung", model : "S9 plus", ram : "4gb", waterproof : true, multicamerasetup : true, internationalwarrenty : true, retinascan : true, exynox : true, snapdragon : false, gorillaglass : true, wirelesscharging : true, id : "hwe32ewejn"},

  {company : "samsung", model : "Grand2", ram : "2gb", waterproof : false, multicamerasetup : false, internationalwarrenty : true, retinascan : false, exynox : false, snapdragon : true, gorillaglass : false, wirelesscharging : false, id : "kjhew78fgwiev"},

  {company : "apple", model : "5s", ram : "1gb", waterproof : false, multicamerasetup : false, internationalwarrenty : true, retinascan : false, exynox : false, snapdragon : false, gorillaglass : false, wirelesscharging : false, id : "sdnvb78ryfukb3"},

  {company : "samsung", model : "m10", ram : "2gb", waterproof : false, multicamerasetup : true, internationalwarrenty : true, retinascan : false, exynox : false, snapdragon : false, gorillaglass : true, wirelesscharging : false, id : "jkefhw7fhwb3x"},
 ]);

 const [showall,setall] = useState(true);

 const showhideall = () => {
   if(showall)
   {
     setall(false);
   }
   else{
     setall(true);
     setrequired([]);
   }
 } 

 const [required,setrequired] = useState([]);

 const [showsearchbar,setshowsearchbar] = useState(false);
 const [search,setsearch] = useState("");

 var concerning = [];

 const searchbar = () => {
  setshowsearchbar(!showsearchbar);
 }

 const findsearch = (e) => {
  concerning = mobile.filter(i => {
    return i.company.includes(e.target.value) || i.model.includes(e.target.value) || i.ram.includes(e.target.value);
  });
  setrequired(concerning);
}


 const findwaterproof = () => {
   concerning = mobile.filter(i => {
    return i.waterproof;
   });
   setshowsearchbar(false);
   setrequired(concerning);
   setall(false);
 }

 const findmulticamerasetup = () => {
  concerning = mobile.filter(i => {
   return i.multicamerasetup;
  });
  setshowsearchbar(false);
  setrequired(concerning);
  setall(false);
}

const findinternationalwarrenty = () => {
  concerning = mobile.filter(i => {
   return i.internationalwarrenty;
  });
  setshowsearchbar(false);
  setrequired(concerning);
  setall(false);
}

const findretinascan = () => {
  concerning = mobile.filter(i => {
   return i.retinascan;
  });
  setshowsearchbar(false);
  setrequired(concerning);
  setall(false);
}

const findexynox = () => {
  concerning = mobile.filter(i => {
   return i.exynox;
  });
  setshowsearchbar(false);
  setrequired(concerning);
  setall(false);
}

const findsnapdragon = () => {
  concerning = mobile.filter(i => {
   return i.snapdragon;
  });
  setshowsearchbar(false);
  setrequired(concerning);
  setall(false);
}

const findwirelesscharging = () => {
  concerning = mobile.filter(i => {
   return i.wirelesscharging;
  });
  setshowsearchbar(false);
  setrequired(concerning);
  setall(false);
}

const adding = (ob) => {
  var cx = [...mobile];
  cx.push(ob);
  setmobile(cx);
}

  return (
    <BrowserRouter>
      <Aux>
        <div className="App">
          <div className="Header">
            <h1 className="main-heading">Mobile World</h1>
            <h2 className="sub-heading">A Device can chnage your life...</h2>
            <div className="filters">
              <button onClick={showhideall}>show all</button>
              <button onClick={findwaterproof}>Waterproof</button>
              <button onClick={findmulticamerasetup}>multicamerasetup</button>
              <button onClick={findinternationalwarrenty}>internationalwarrenty</button>
              <button onClick={findretinascan}>retinascan</button>
              <button onClick={findexynox}>exynox</button>
              <button onClick={findsnapdragon}>snapdragon</button>
              <button onClick={findwirelesscharging}>wirelesscharging</button>
              <button onClick={searchbar}>search</button>
              {showsearchbar? <input className="block" placeholder="Search" type="text" onChange={findsearch}></input> : null}
              {required != null? required.map(i => {
                return <Mobile company={i.company} model={i.model} ram={i.ram} waterproof={i.waterproof} multicamerasetup={i.multicamerasetup} internationalwarrenty={i.internationalwarrenty} retinascan={i.retinascan} exynox={i.exynox} snapdragon={i.snapdragon} gorillaglass={i.gorillaglass} wirelesscharging={i.wirelesscharging} key={i.id} myid={i.id}></Mobile>
              }) : <h1>Sorry, no match found !!!</h1>}
            </div>
            <hr className="line"></hr>
          </div>
          {showall? mobile.map(i => {
            return <Mobile company={i.company} model={i.model} ram={i.ram} waterproof={i.waterproof} multicamerasetup={i.multicamerasetup} internationalwarrenty={i.internationalwarrenty} retinascan={i.retinascan} exynox={i.exynox} snapdragon={i.snapdragon} gorillaglass={i.gorillaglass} wirelesscharging={i.wirelesscharging} key={i.id} myid={i.id}></Mobile>
          }) : null }
          <div className="btns">
            <nav>
              <ul className="navbtn">
                <li><Link to="/">home</Link></li>
                <li><Link to="/addmore">add device</Link></li>
              </ul>
            </nav>
          </div>
          <Route path="/" exact component={Welcome} />
          <Route path="/addmore" exact component={Thankyou} />
          <Addmobile addmob={(ob) => adding(ob)}></Addmobile>
        </div>
      </Aux>  
    </BrowserRouter>  
  );
}

export default App;
