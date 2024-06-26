import GameCard from '../../utils/index';
import { Grid } from '@mui/material';

const ReleasedGame = ({newReleasedGames}) => {
  return (
    <Grid container spacing={2}>
      {newReleasedGames.map((game, index) => (
        <Grid item xs={6} sm={3} key={index} sx={{cursor: 'pointer'}} >
          <GameCard
            image={game.image}
            title={game.title}
            subtitle={game.subtitle}
            rating={game.rating}
            showRating={true}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ReleasedGame;
