const movies = [
    {
        title: 'Film1',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 10
      },
      {
        title: 'Film2',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Film3',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 5
      },
];

/* export default films; */
if (typeof module !== 'undefined') {
    module.exports = movies;
  }