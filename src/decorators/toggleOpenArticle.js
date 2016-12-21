//decorator === HOC(Higher Order Component)
import React from 'react';

export default function toggleOpenArticle(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openArticleId: null
        };

        render() {
            //{...this.state} = openArticleId
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        // toggleOpenArticle = id => ev => {
        //     this.setState({
        //         openArticleId: (this.state.openArticleId !== id) ? id : null
        //     });
        // };

        toggleOpenArticle = (id) => (ev) => {
            this.setState({
                openArticleId: (this.state.openArticleId !== id) ? id : null
            });
        }
    }
}