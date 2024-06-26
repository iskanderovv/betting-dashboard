import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import MostPopularGames from "./components/most-popular-games/MostPopularGames";

import Card1 from "./images/card-1.png";
import Card2 from "./images/card-2.png";
import Card3 from "./images/card-3.png";
import Card4 from "./images/card-4.png";
import Card5 from "./images/card-5.png";

import releasedImg1 from './images/bg-1.png';
import releasedImg2 from './images/bg-2.png';
import releasedImg3 from './images/bg-3.png';
import releasedImg4 from './images/bg-4.png';
import releasedImg5 from './images/bg-5.png';
import releasedImg6 from './images/bg-6.png';
import releasedImg from './images/bg.png';
import releasedImg7 from './images/bg-7.png';
import ReleasedGame from "./components/released-game/ReleasedGame";
import LiveGame from "./components/live-game/LiveGame";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const mostPopularGames = [
    { image: Card1, title: "Sniper 2", rating: "8.6 / 10 Action-rpg," },
    { image: Card2, title: "Motor Race", rating: "8.6 / 10 Action-rpg," },
    { image: Card3, title: "Witcher Hunt", rating: "8.6 / 10 Action-rpg," },
    { image: Card4, title: "Pabg war", rating: "8.6 / 10 Action-rpg," },
    { image: Card5, title: "Sniper 2", rating: "8.6 / 10 Action-rpg," },
  ];

  const newReleasedGames = [
    { image: releasedImg, title: 'Ghost of Tsushima', subtitle: 'war Battle', rating: 4.5 },
    { image: releasedImg1, title: 'Need for Speed', subtitle: 'Racing', rating: 4.5 },
    { image: releasedImg2, title: 'The Witcher Hunt', subtitle: 'war Battle', rating: 4 },
    { image: releasedImg3, title: 'Free Fire', subtitle: 'war Battle', rating: 4.5 },
    { image: releasedImg4, title: 'Need for Speed', subtitle: 'Racing', rating: 4.5 },
    { image: releasedImg5, title: 'Ghost of Tsushima', subtitle: 'war Battle', rating: 4.5 },
    { image: releasedImg6, title: 'Ghost of Tsushima', subtitle: 'war Battle', rating: 4.5 },
    { image: releasedImg7, title: 'Ghost of Tsushima', subtitle: 'war Battle', rating: 4.5 },
  ];


  return (
    <>
      <Box
        sx={{
          ml: "160px",
          my: "40px",
          display: "flex",
          gap: "30px",
          justifyContent: "space-between",
          p: "0 16px",
          color: '#FAFAFA',
        }}
      >
        <Box
          sx={{
            maxWidth: "983px",
            width: "100%",
          }}
        >
          <Navbar />
          <Hero />
          <MostPopularGames mostPopularGames={mostPopularGames} />
          <ReleasedGame newReleasedGames={newReleasedGames} />
        </Box>
        <Box
          sx={{
            width: "326px",
          }}
        >
          {/* <LiveGame /> */}
          <Sidebar />
        </Box>
      </Box>
    </>
  );
}

export default App;
