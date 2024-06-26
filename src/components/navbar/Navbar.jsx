import { Box, List, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <List
        sx={{
          display: "flex",
          gap: "40px",
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#FC8B40",
            borderRadius: '24px',
            fontSize: '17px',
            fontWeight: 500,
            p: '8px 22px',
            textTransform: 'capitalize',
            "&:hover": {
              background: "#FC8B40",
            },
          }}
        >
          Game
        </Button>
        <Button
          sx={{
            color: "#A0A8B1",
            textTransform: "capitalize",
            fontWeight: 500,
            fontSize: "17px",
          }}
        >
          Live score
        </Button>
        <Button
          sx={{
            color: "#A0A8B1",
            textTransform: "capitalize",
            fontWeight: 500,
            fontSize: "17px",
          }}
        >
          Statistics
        </Button>
        <Button
          sx={{
            color: "#A0A8B1",
            textTransform: "capitalize",
            fontWeight: 500,
            fontSize: "17px",
          }}
        >
          Analytics
        </Button>
        <Button
          sx={{
            color: "#A0A8B1",
            textTransform: "capitalize",
            fontWeight: 500,
            fontSize: "17px",
          }}
        >
          Forecasts
        </Button>
      </List>
    </Box>
  );
};

export default Navbar;
