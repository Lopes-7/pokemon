import React, { Component } from 'react';


class Question extends Component {
    render() {
        const q = this.props.question;
        return (
            <div>
                {q.question}
            </div>
        );
    }
}

export default Question;
