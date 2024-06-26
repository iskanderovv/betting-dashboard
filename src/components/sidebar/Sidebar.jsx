import { Avatar, Box, Typography } from "@mui/material";
import avatar from "../../images/Admin.png";
import LiveGame from "../live-game/LiveGame";
import needSpeedImg from '../../images/need speed.png';
import SingleCard from "../single-card/SingleCard";

const Sidebar = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: '20px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
          }}
        >
          <Avatar alt="avatar" src={avatar} />
          <Typography
            component="p"
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              color: "#261D56",
            }}
          >
            William jonson
          </Typography>
        </Box>
        <Typography component="i" className=""></Typography>
        <i
          className="bi bi-bell"
          style={{
            color: "#263262",
            fontSize: "24px",
            cursor: "pointer",
          }}
        ></i>
      </Box>
      <LiveGame />
      <SingleCard />
    </Box>
  );
};

export default Sidebar;
