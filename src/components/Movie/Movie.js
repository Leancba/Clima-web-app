import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id)
        console.log(this.props.movie)
    }


    

    render() {
        return (
            <div className='container'>
                
                     <img className='imagen' src={this.props.movie.Poster} width= '350' height='550'></img>
                
                <div>
                    <p className='title'> {this.props.movie.Title} </p>
                    <p className='plot'> {this.props.movie.Plot }

                 </p>
                    <div className='info'>
                        <div className='info1'>
                            <div> Released: <p>{this.props.movie.Released} </p></div>
                            <div> Runtime:  <p> {this.props.movie.Runtime} </p></div>
                        </div>

                        <div className='info2'>
                            <div> Country: <p> {this.props.movie.Country} </p></div>
                            <div> Rating:  <p> {this.props.movie.imdbRating}/10 </p></div>
                        </div>
                     </div>   
                    
                </div>
            
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        movie: state.movieDetail
    }
}
  



export default connect ( mapStateToProps, {getMovieDetail}, ) (Movie); 