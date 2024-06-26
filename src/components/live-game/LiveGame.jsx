import React from "react";
import GameCard from "../../utils/index";
import releasedImg from "../../images/pubg live.png";
import releasedImg1 from "../../images/live 2.png";
import releasedImg2 from "../../images/live 3.png";
import { Box, Typography } from "@mui/material";

const threeGames = [
  { image: releasedImg, title: "Pubg war", subtitle: "war Battle" },
  { image: releasedImg1, title: "Gost of Tsushima", subtitle: "Racing" },
  { image: releasedImg2, title: "Free Fire", subtitle: "war Battle" },
];

const LiveGame = () => {
  return (
    <>
      <Box>
        <Typography
          component="h4"
          sx={{
            color: "#22283C",
            fontWeight: 600,
            fontSize: "24px",
            m: "32px 0 8px 0",
          }}
        >
          Live Game
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "75px",
            background: "#FC8B40",
            borderRadius: "16px"
          }}
        ></Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        mt: '20px',
        cursor: 'pointer'
      }}>
        {threeGames.map((game, index) => (
          <GameCard
            key={index}
            image={game.image}
            title={game.title}
            subtitle={game.subtitle}
            showRating={false}
          />
        ))}
      </Box>
    </>
  );
};

export default LiveGame;
