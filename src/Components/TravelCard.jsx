import '../Styles/TravelCardStyle.css';
import { Paper, Grid} from "@mui/material";


export default function TravelCard(props) {
    const {id,title, location, mapUrl, startDate, endDate, description, imageUrl} = props;

    return (
        <Paper variant='outlined' className='paper' sx={{
            mb:2
        }}>
            <Grid container spacing={5} className='container'  p={5}>
                <Grid item xs={12} md={6}>
                    <img className='card-image' src={imageUrl} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='details-container'>
                        <div className='location-heading-container'>
                            <p>📌 {location.toUpperCase()}</p>
                            <a href={mapUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a> 
                        </div>
                        <div className='experience-container'>
                            <h1>{title}</h1>
                            <h3>{startDate} - {endDate}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

