const movieComponent = {
    template: `<div class="col-md">
                    <ul v-for="movie in movies" >
                        <li v-on:click="fetchMovieDetails(movie.id)" >
                            <p>{{movie.id}} {{movie.name}}
                            </p>
                        
                        </li>
                    </ul>
                </div>`,
    props: ['movies', 'movieID'],
    methods: {
        fetchMovieDetails: function(id)
        {
            let vm = this
            vm.movieID = id
            vm.details = true
            console.log(vm.details)

            axios.get(`/api/movieDetails?parameter=${this.movieID}`)
                .then(response => {
                    vm.movieDetails = response.data.results

                    console.log(`fetching movie details ${ this.movieID}`)
                })
                
        }
    }
}

const app = new Vue({
    el: '#comics-app',
    data: {
        appName: 'Comics Vine API App',
        searched: false,
        searchQuery: '',
        movies: [],
        all: '',
        totalResults: [],
        overTen: false,
        movieID: 0,
        movieDetails: [],
        details: false
    },
    methods: {
        searchMovies: function() {
            let vm = this
            axios.get(`/api/movies?parameter=${this.searchQuery}`)
                .then(response => {
                    vm.movies = response.data.results
                    if (vm.movies.length >= 10)
                    {
                        console.log("Over ten count")
                        vm.movies = vm.movies.splice( 0, 10)
                    }
                })
        }
    },
    components: {
        'movie-component':movieComponent
    }
});