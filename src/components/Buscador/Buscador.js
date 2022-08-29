import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import image from './image.png'
import './Buscador.css';
import { getMovies, addMovieFavorite } from "../../actions"; //Importamos las accions para
                                                            // utilizarlas



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      button: "Add to favorite"
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }
  

  render() {
    const { title } = this.state;
    return (
      <div>
        <div className="buscador">
        
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          
          <div>
            <label className="label" htmlFor="title"></label>
            <input className="input"
              placeholder="Peliculas.."
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          
        </form>
        </div>

        <ul className="pelis">
         {this.props.movies.length ? (

          this.props.movies.map(m => (
            <div className="fondito" key = {m.imdbID}>
              
                <div className="cartita">
                  <p className="titulo">{m.Title}</p>
                  <Link to={`/movie/${m.imdbID}`}>
                    <img className="fotito" src={m.Poster} width = "250" height="350"></img>
                  </Link>
                </div>
              
              
              <button className="boton3"
              
              onClick={() =>this.props.addMovieFavorite({title: m.Title, id: m.imdbID , poster : m.Poster})}> 
              {this.state.button} 
              </button>

            </div>))) 
            
            :

                 <img className="imagen2" src={image} /> 
              
         }
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);



