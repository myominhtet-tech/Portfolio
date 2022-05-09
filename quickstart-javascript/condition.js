var movies = [{
        title: 'Black Panther',
        time: '6pm',
        status: 'unavailable'
    },
    {
        title: 'Lady Bird',
        time: '8pm',
        status: 'available'
    },
    {
        title: 'Spider Man',
        time: '6am',
        status: 'unavailable'
    },
    {
        title: 'Super Man',
        time: '7am',
        status: 'available'
    },
];

for (var movie of movies) {
    if (movie.status === 'available') {
        console.log('The movie ${ movie.title } plays at $${movie.time}');
    } else {
        console.log('Sorry, the movie ${movie.title} is sold out');
    }
}