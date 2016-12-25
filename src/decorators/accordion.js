//decorator === HOC(Higher Order Component)
import React from 'react';

export default function accordionDecorator(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openItemId: null
        };

        render() {
            //{...this.state} = openArticleId
            return <Component { ...this.props } { ...this.state } toggleOpenItem = { this.toggleOpenItem }/>
        }

        toggleOpenItem = id => ev => {
            this.setState({
                openItemId: (this.state.openItemId !== id) ? id : null
            });
        };
    }
}