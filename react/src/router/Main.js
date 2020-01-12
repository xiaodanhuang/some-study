import React from 'react'
export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
