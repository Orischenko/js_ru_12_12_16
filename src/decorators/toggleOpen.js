//decorator === HOC(Higher Order Component)
import React from 'react';

export default function toggleOpen(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            isOpen: false
        };

        render() {
            return <Component {...this.props} isOpen = {this.state.isOpen} toggleOpen={this.toggleOpen}/>
        }

        toggleOpen = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        };
    }
}