import { Avatar, Container, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
    },
    title: {
        color: "#555",
        fontSize: 16,
        fontWeight: 500,
    },

}));

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography>Online Friends</Typography>
            <AvatarGroup total={5} sx={{ flexDirection: 'row' }}>
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/6.jpg" />
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/7.jpg" />

            </AvatarGroup>
            <Typography>Gallery</Typography>
            <ImageList sx={{ width: 300, height: 250 }} style={{ marginBottom: "30px" }} cols={3} rowHeight={174}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Typography>Categories</Typography>
            <Link style={{
                marginRight: "15px",
                color: "#555",
                fontSize: 16,
                cursor: "pointer",
                underline: "hover",
            }} href="#" variant="body2">Sport</Link>
            <Link style={{
                marginRight: "15px",
                color: "#555",
                fontSize: 16,
                cursor: "pointer",
                underline: "hover",
            }} href="#" variant="body2">Movies</Link>
            <Link style={{
                marginRight: "15px",
                color: "#555",
                fontSize: 16,
                cursor: "pointer",
                underline: "hover",
            }} href="#" variant="body2">Music</Link>
            <Divider flexItem style={{ marginBottom: 10 }} />
            <Link style={{
                marginRight: "15px",
                color: "#555",
                fontSize: 16,
                cursor: "pointer",
                underline: "hover",
            }} href="#" variant="body2">Science</Link>
            <Link style={{
                marginRight: "15px",
                color: "#555",
                fontSize: 16,
                cursor: "pointer",
                underline: "hover",
            }} href="#" variant="body2">Professions</Link>
            <Link style={{
                marginRight: "15px",
                color: "#555",
                fontSize: 16,
                cursor: "pointer",
                underline: "hover",
            }} href="#" variant="body2">Life</Link>
        </Container>
    );
}

export default Rightbar;
