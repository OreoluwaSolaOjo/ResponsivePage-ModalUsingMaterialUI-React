import { Container, List, makeStyles, Menu, Typography } from "@material-ui/core";
import { Apps, Camera, Group, Home, Settings, Shop, Videocam, ViewList } from "@material-ui/icons";
import { Collections, Logout, Male } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        color: "white",
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7",
        },
        // position sticky to make the left bar stay in position even if the feed is still going down
        position: "sticky",
        top: 0,
    },
    icon: {

        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
            color: "#555",
        }
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
        color: "white",

    },
    text: {
        color: "#555",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }
}));

const Leftbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Group className={classes.icon} />
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <ViewList className={classes.icon} />
                <Typography className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <Camera className={classes.icon} />
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <Videocam className={classes.icon} />
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <Apps className={classes.icon} />
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Collections className={classes.icon} />
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <Shop className={classes.icon} />
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <Logout className={classes.icon} />
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    );
}

export default Leftbar;
