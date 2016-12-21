import React, { Component, PropTypes } from 'react';

export default class Testimonials extends Component{

    static propTypes = {
        comment: PropTypes.object
    };

    render(){
        const { comment } = this.props;

        return (
            <blockquote>
                <h5>{ comment.user }</h5>
                <p><i>{ comment.text }</i></p>
            </blockquote>
        )
    }
}

//functional component

// export default function Testimonials(props) {
//     const { comment } = props;
//
//     return (
//         <blockquote>
//             <h6>{ comment.user }</h6>
//             <p><i>{ comment.text }</i></p>
//         </blockquote>
//     )
// }