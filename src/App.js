import React, {useState, useEffect} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const defaultSort = (articles) => {
        const newArticles = articles.sort((a, b)=> {
            return b.upvotes - a.upvotes;
        });
        return newArticles;
    }

    const [sortedArticles, setSortedArticles] = useState(defaultSort(articles));

    useEffect(()=> {
        console.log("sortedArticles ", sortedArticles);
    }, [sortedArticles]);

    const mostVoted = () => {
        console.log("Clicked mostVoted");
        const newArticles = sortedArticles.sort((a, b)=> {
            return b.upvotes - a.upvotes;
        });
        setSortedArticles([...newArticles]);
        console.log("mostVoted sortedArticles ", sortedArticles);
    }
    
    const mostRecent = () => {
        console.log("Clicked mostRecent");
        const newArticles = sortedArticles.sort((a, b)=> {
           return new Date(b.date) - new Date(a.date);
        });      
        setSortedArticles([...newArticles]);
        console.log("mostRecent sortedArticles ", sortedArticles);
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={()=> mostVoted()}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={()=> mostRecent()}>Most Recent</button>
            </div>
            <Articles articles={sortedArticles}/>
        </div>
    );

}

export default App;
