import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import speedImg from "../../images/need speed.png";

export default function SingleCard() {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        mt: "41px",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="218"
          image={speedImg}
          alt="green iguana"
        />
        <CardContent
          sx={{
            "&:hover": {
              background: "white",
            },
          }}
        >
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: "#22283C",
              fontSize: "28px",
              fontWeight: 600,
            }}
          >
            Need for Speed
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#9DA1B4",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            Racing
          </Typography>
          <Typography
            sx={{
              color: "#FC8B40",
              fontSize: "12px",
              display: "flex",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#22283C",
                mr: "4px",
              }}
            >
              4.5
            </Typography>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#9DA1B4",
              m: "12px 0 33px 0",
              lineHeight: "20px",
            }}
          >
            Interactively synergize revolutionary viasustaina communities.
            Energistically foster distinctiveide resource maximizing.
          </Typography>
          <CardActions>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                background: "#FC8B40",
                width: "100%",
                fontWeight: 700,
                fontSize: '17px',
                color: 'white',
                '&:hover': {
                    background: '#FC8B40'
                }
              }}
            >
              Download Now
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
