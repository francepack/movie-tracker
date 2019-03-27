import { connect } from 'react-redux';
import { getMovies } from '../../actions/actions';
import App from './App';

export const mapStateToProps = (state) => ({
    movies: state.movies,
})

export const mapDispatchToProps = (dispatch) => ({
    getMovies: (movies) => dispatch(getMovies(movies)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);