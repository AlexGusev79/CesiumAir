import React, { Component } from "react";
import Header from "./header";
import Background from "./background";
import Footer from "./footer";

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Background />
                <Footer />
            </div>
        );
    }
}
export default Layout;


