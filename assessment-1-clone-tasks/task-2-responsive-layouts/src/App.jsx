import './App.css';

// Header component for the watch.it website
function Header() {
  return (
    <header>
      <h1>watch.it</h1>
      <nav>
        <a href="#movies">Movies</a>
        <a href="#tv-shows">TV Shows</a>
        <a href="#genres">Genres</a>
      </nav>

<button type="button">Search</button>
    </header>
  );
}
// Movie card component
function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img
      src={movie.image}
      alt={movie.title}
    />

      <div className="movie-info">
        <h2>{movie.title}</h2>

        <p>{movie.description}</p>

        <button type="button">WATCH NOW</button>
      </div>
    </article>
  );
}
// Movie data from the university assets
  const movies = [
  {
    title: 'Who Framed Roger Rabbit (1988)',
      image: '/who-framed-roger-rabbit.jpg',
      description:
    'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
  }, 
    {
    title: 'Hook (1991)',
    image: '/hook.jpg',
    description:
      'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
  },
  {
  title: 'La La Land (2016)',
  image: '/la-la-land.jpg',
  description:
    'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
  },
  {
  title: 'Hidden Figures (2016)',
  image: '/hidden-figures.jpg',
  description:
    "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
  title: 'Palm Springs (2020)',
  image: '/palm-springs.jpg',
  description:
    'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
  }, 
  {
  title: 'Barbie (2023)',
  image: '/barbie.jpg',
  description:
    'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
  },  
];

function App() {
  return (
    <>
      <Header />
      <main className="movies-container" id="movies">
        <MovieCard movie={movies[0]} />
        <MovieCard movie={movies[1]} />
        <MovieCard movie={movies[2]} />
        <MovieCard movie={movies[3]} />
        <MovieCard movie={movies[4]} />
        <MovieCard movie={movies[5]} />
      </main>
    </>
  );
}

export default App;