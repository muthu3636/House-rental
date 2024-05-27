// import React from "react"
// import Header from "../common/header/Header"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Home from "../home/Home"
// import Footer from "../common/footer/Footer"
// import About from "../about/About"
// import Pricing from "../pricing/Pricing"
// import Blog from "../blog/Blog"
// import Services from "../services/Services"
// import Contact from "../contact/Contact"
// import SignIn from "../signIn"
// import AppartmentForm from "../../AppartmentForm"
// import Login from "../home/Login"




// const Pages = () => {
//   return (



//     <>

   
//       <Router>
//         <Header />
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/about' component={About} />
//           <Route exact path='/services' component={Services} />
//           <Route exact path='/blog' component={Blog} />
//           <Route exact path='/pricing' component={Pricing} />
//           <Route exact path='/contact' component={Contact} />
//           <Route exact path='/SignIn' component={SignIn} />
//           <Route exact path='/AppartmentForm' component={AppartmentForm} />
//           <Route exact path='/Login' component={Login} />
          
          
//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   )
// }

// export default Pages


import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import SignIn from "../signIn";
import AppartmentForm from "../../AppartmentForm";
import Login from "../home/Login";
import Admin from "../home/Admin"; 
import Dashboard from '../home/Dashboard';
// Import your Admin component

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/AppartmentForm' component={AppartmentForm} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/admin' component={Admin} /> 
          <Route exact path='/dashboard' component={Dashboard} /> {/* Add this line */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Pages;
