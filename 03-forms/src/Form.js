import React from 'react'

export default class Form extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    }

    updateFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    updateLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name</label>
                    <input onChange={this.updateFirstName} type="text" value={this.state.firstName} name="firstName" className="form-control"/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input onChange={this.updateLastName} type="text" value={this.state.lastName} name="lastName" className="form-control"/>
                </div>
            </React.Fragment>
        )
    }
}