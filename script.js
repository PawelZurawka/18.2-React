var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'https://i.postimg.cc/ncrf9730/Harry-Potter.jpg' 
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        img: 'https://i.postimg.cc/Pxy0PrZg/KrolLew.jpg'
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        desc: 'Film o wielu wątkach',
        img: 'https://i.postimg.cc/Wbhx1V4y/Pulp-Fiction.jpg'
    },
    {
        id: 4,
        title: 'Śmierć w Wenecji',
        desc: 'Film o facecie w łódce',
        img: 'https://i.postimg.cc/yYttJGg8/Smiercw-Wenecji.jpg'
    }
];

var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );  
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));