import React from "react";

export default class AlertBox extends React.Component {
    state = {
        message: "Hello World me"
    }

    render() {
        return(
            <React.Fragment>
                <div style={{
                    border: "3px solid red",
                    padding: "10px",
                    height: "30px"
                }}>{this.state.message}</div>
            </React.Fragment>

        )
    }
}
