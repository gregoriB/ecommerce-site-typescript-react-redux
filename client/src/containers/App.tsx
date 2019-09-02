import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateUserData } from "../store/actions/actionCreators";
import "../styles//App.css";

// import useMapToasts from "../hooks/useMapToasts";
// import CheckoutPage from "../components/CheckoutPage";
import SearchPage from "./SearchPage";
import NavBar from "../components/navBar/NavBar";
import Home from "./HomePage";

import styled from "styled-components";
import RegistrationPage from "../components/navBar/RegistrationForm";

const AppContainer = styled.div`
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
`;

// const ToastContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: fixed;
//     bottom: 1vh;
//     right: 2vw;
//     width: 25vw;
//     z-index: 100000;
// `;

interface IProps {
    cart: {};
    productArr: number[];
    userData: any;
    updateUserData(val: any): any;
}

const App: React.FC<IProps> = ({ cart, productArr, userData, updateUserData }) => {
    // const toasts = useMapToasts(productArr);
    // console.log(toasts);
    return (
        <AppContainer className="app">
            <Router>
                <NavBar cart={cart} userData={userData} updateUserData={updateUserData} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route
                        exact
                        path="/registration"
                        render={() => <RegistrationPage updateUserData={updateUserData} />}
                    />
                </Switch>
                {/* <ToastContainer>{toasts}</ToastContainer> */}
            </Router>
        </AppContainer>
    );
};

const mapStateToProps = (state: IProps) => ({
    cart: state.cart,
    productArr: state.productArr,
    userData: state.userData
});

const actionCreators = {
    updateUserData
};

export default connect(
    mapStateToProps,
    actionCreators
)(App);
