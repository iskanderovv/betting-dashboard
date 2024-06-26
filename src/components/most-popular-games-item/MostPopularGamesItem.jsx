import { Box, Typography } from "@mui/material";
const MostPopularGamesItem = ({ image, title, rating }) => {
  return (
    <Box
      sx={{
        background: `url(${image}) center center / cover`,
        fontFamily: `"Oxanium", sans-serif`,
        height: '300px',
        borderRadius: '14px',
        padding: '12px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: 'white', 
        cursor: 'pointer',
      }}
    >
      <Typography
        component="h6"
        sx={{
          fontWeight: 700,
          fontSize: "24px",
        }}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        sx={{
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <i className="bi bi-star-fill" style={{marginRight: '4px', color: '#FC8B40'}}></i>
        {rating}
      </Typography>
    </Box>
  );
};

export default MostPopularGamesItem;
