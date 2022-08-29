import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div className="container1">

        <ul className="favorite">
          {this.props.movies?.map(m =>
          <div key = {m.id}>
            <div className="fondito2">
            <Link to = {`/movie/${m.id}`}>
             <img src={m.poster}  width={200} height={250} ></img>   
            </Link>
            <button className="btn" onClick={() => this.props.removeMovieFavorite(m.id)}>
                Remove to favorite
                </button>
             
            </div>
          </div>)
          
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies : state.moviesFavourites
    
  }

}



export default connect (mapStateToProps, {removeMovieFavorite})(ConnectedList);
