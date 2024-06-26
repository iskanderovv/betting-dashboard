import { Box, Button, Typography } from "@mui/material";
import heroImg from "../../images/hero.png";

const Hero = () => {
  return (
    <Box
      sx={{
        background: `url(${heroImg}) center center / cover`,
        m: "17px 0px 30px 0",
        borderRadius: '16px',
        width: '100%'
      }}
    >
      <Box sx={{ p: "64px 30px", }}>
        <Typography
          component="h1"
          sx={{
            fontWeight: 600,
            fontSize: "42px",
            lineHeight: "48px",
            color: "white",
            maxWidth: "494px",
          }}
        >
          The Forbidden Kingdom Adventure War
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "#FC8B40",
            borderRadius: "8px",
            fontSize: "17px",
            fontWeight: 500,
            mt: '30px',
            textTransform: 'capitalize',
            '&:hover': {
                background: '#FC8B40',
            }
          }}
        >
          More Details
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
