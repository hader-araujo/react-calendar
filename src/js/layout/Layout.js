import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Show calendar",
        };
    }

    render() {
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };

        return (
            <div>

                <Nav location={location} />

                <div class="container-fluid" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">

                            {this.props.children}

                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>

        );
    }
}
