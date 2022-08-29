const ApiKey = '7b414db8'

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${titulo}`)   //-----> BUSCA EN LA API LAS PELICULAS, ES UNA
        .then(response => response.json())                                 //ES UNA FUNCION QUE RETORNA OTRA FUNCION
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

  export function removeMovieFavorite(id) {
    return {
         type: "REMOVE_MOVIE_FAVORITE",                        //-----> Accede por la inf de la api a los detalles.
         payload : id
    };         
}

export function getMovieDetail(idMovie) {
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${idMovie}`)
        .then(responde => responde.json())
        .then(data => {
            dispatch({type: "GET_MOVIE_DETAIL", payload : data})
        })
    }
}


export function addMovieFavorite(payload) {
    return { 
        type: "ADD_MOVIE_FAVORITE", 
        payload                                              //----> AGREGA LAS PELICULAS A FAVORITO
    };        
  }

 







  