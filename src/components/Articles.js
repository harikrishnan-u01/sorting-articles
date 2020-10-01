import React,{useEffect} from 'react';

function Articles(articles) {
    let index = 0;
    useEffect(()=> {
        console.log("articles in child", articles);
    }, [articles]);

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {
                       articles.articles.map((article)=> {
                        return <tr data-testid="article" key={index++}>
                                    <td data-testid="article-title">{article.title}</td>
                                    <td data-testid="article-upvotes">{article.upvotes}</td>
                                    <td data-testid="article-date">{article.date}</td>
                                </tr>
                       }) 
                    }                
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
