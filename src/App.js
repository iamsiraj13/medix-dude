import React from 'react';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';
import Surgery from './Components/Surgery/Surgery';
 

const App = () => {
  return (
    <AuthProvider>
     <Router> 
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route  path="/about">
           <About></About>
         </Route>
         <PrivateRoute path='/booking'>
            <Booking></Booking>
         </PrivateRoute>
         <PrivateRoute path="/surgery">
           <Surgery></Surgery>
        </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         <Route path="/service-details/:serviceId">
           <ServiceDetails></ServiceDetails>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
  );
};

export default App;