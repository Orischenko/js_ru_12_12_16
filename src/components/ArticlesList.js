import React, { Component, PropTypes } from 'react';
import Article from './Article';
import toggleOpenArticle from '../decorators/toggleOpenArticle';

class Articleslist extends Component{
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const {articles} = this.props;

        const articleElements = articles.map(
            (article) => {
                return <li key = { article.id }>
                    <Article article = { article }
                             onClick = {this.props.toggleOpenArticle(article.id)}
                             isOpen = {this.props.openArticleId == article.id}
                    />
                </li>;
            }
        );

        return (
            <ul>
                { articleElements }
            </ul>
        );
    }
}

export default toggleOpenArticle(Articleslist);

//functional component

// export default function Articlelist(props) {
//     const { articles } = props;
//
//     const articleElements = articles.map(
//         (article) => {
//             if(!article.comments) return <li key = { article.id } ><Article article = { article }/></li>;
//
//             return <li key = { article.id } ><Article article = { article }/><CommentsList comments = { article.comments }/></li>;
//         }
//     );
//
//     return (
//         <ul>
//             { articleElements }
//         </ul>
//     )
// }