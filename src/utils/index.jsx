import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Rating } from "@mui/material";

const GameCard = ({
  image,
  title,
  subtitle,
  rating = 0,
  showRating = true,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: "0px 10px",
          textWrap: "nowrap",
          boxShadow: `0px 2px 8px 0px #CACDDB6B`,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "66px", height: "66px" }}
          image={image}
          alt={title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{
                color: "#22283C",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: "#9DA1B4",
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: 500,
                color: "#22283C",
              }}
            >
              {showRating && rating}
              {showRating && (
                <Rating
                  sx={{
                    fontSize: "14px",
                  }}
                  name="read-only"
                  value={rating}
                  readOnly
                />
              )}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

GameCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  rating: PropTypes.number,
  showRating: PropTypes.bool,
};

export default GameCard;
