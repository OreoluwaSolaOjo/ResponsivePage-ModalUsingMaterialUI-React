import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    media: {
        height: "250px",
        [theme.breakpoints.down("sm")]: {
            height: "150px ",
        },
    },
    card: {
        marginBottom: theme.spacing(5),
    }
}));
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'My First Post',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'My Second Post',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'My Third Post',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'My Fourth Post',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'My Fifth Post',
    },

];

const Post = () => {

    const classes = useStyles();
    return (<div>
        {itemData.map((item) => (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.img}
                        title="My post"
                    />
                    <CardContent >
                        {/* give gutterbottom on typography to give margin bottom */}
                        <Typography gutterBottom variant="h5">{item.title}</Typography>
                        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores, incidunt blanditiis, soluta ipsam excepturi culpa perferendis, rerum quidem cum numquam doloribus est odio nulla sunt at rem perspiciatis vero. Commodi culpa numquam adipisci, nulla earum recusandae ullam neque inventore? Magni assumenda maxime, fuga amet debitis nobis nulla obcaecati repellat?</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>))
        }
    </div>
    );
}

export default Post;
