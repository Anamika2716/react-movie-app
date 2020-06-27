import React from 'react';
import {data} from '../data';
import {ADD_MOVIES, addMovies, handleMovieSearch} from "../actions";



class Navbar extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={

            searchText:''
        }
    }
    handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovies(movie));
        this.setState({
            showSearchResults:true
        })
    };
    handleSearch=()=>{
        const {searchText}=this.state;
        console.log("state",this.state);
       this.props.dispatch(handleMovieSearch(searchText));
    };
    handleChange=(e)=>{
        this.setState({searchText:e.target.value});
    };
    render(){

        const {result,  showSearchResults}=this.props.search;
        console.log("dispatch", this.props.dispatch);
        return (

            <div className="nav">
                <div className="search-container">
                <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResults &&
                    <div className="search-results">
                        <div className="search-result">
                        <img src={result.Poster} alt="search-pic"/>
                        </div>
                        <div className="movie-info">
                            <span >{result.Title}</span>
                            <button onClick={()=>this.handleAddToMovies(data[8])}>Add To Movies</button>
                        </div>

                    </div>}
                </div>
            </div>
        );
    }

}

export default Navbar;
