import { Box, Typography } from "@mui/material";
import React from "react";
import MostPopularGamesItem from "../most-popular-games-item/MostPopularGamesItem";

const MostPopularGames = ({ mostPopularGames }) => {
  return (
    <Box>
      <Typography
        component="h1"
        sx={{
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "25px",
          maxWidth: "223px",
          color: "#261D56",
        }}
      >
        Most Popular Games
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            lg: "repeat(5, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "repeat(1, 1fr)",
          },
          gap: '16px',
          m: '10px 0 30px 0'
        }}
      >
        {mostPopularGames.map((mostPopularGame, index) => (
          <MostPopularGamesItem
            key={index}
            image={mostPopularGame.image}
            title={mostPopularGame.title}
            rating={mostPopularGame.rating}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MostPopularGames;
