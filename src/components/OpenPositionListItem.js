import { 
  Typography,
  Link,
  Button
} from "@mui/material";

export default props => {

  let {
    position
  } = props;

  let {
    categories
  } = position;

  return (
    <Link 
      href={ position.applyUrl } 
      underline="none"
      target="_blank" 
      sx={ { 
        py: 4, 
        'display': 'flex', 
        borderBottom: '1px solid rgb(129, 146, 158)',
        flexDirection: 'column',
        '@media screen and (min-width: 800px)': {
          flexDirection: 'row',
          alignItems: 'center', 
          justifyContent: 'space-between',
        }
      } }>
      <div>
        <Typography variant="h3">
          { position.text }
        </Typography>
        <Typography variant="h6" mt={ 1 }>
          { categories.location } / { categories.team }
        </Typography>
      </div>
      <div>
        <Button 
          variant="outlined"
          sx={{
            mt: 4,
            '@media screen and (min-width: 800px)': {
              mt: 0
            }
          }}>Apply</Button>
      </div>
    </Link>
  )

}