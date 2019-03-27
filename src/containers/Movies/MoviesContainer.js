import { connect } from 'react-redux';
import { getMovies } from '../../actions';
import Movies from './Movies';

const mapStateToProps = (state) => ({
    movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
    getMovies: (movies) => dispatch(getMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);