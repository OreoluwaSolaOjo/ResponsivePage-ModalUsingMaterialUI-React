import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";
import { Avatar, InputBase } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from "@mui/icons-material";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    // breakpoints for differentscreens and what you want to show , check documentation
    // use justifyContent flex if items are to be aligned horizontally and use alignitems flex for vertical
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    search: {
        display: "flex",
        alignItems: "center",
        color: "white",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
        },
        paddingLeft: "10px",
        color: "white,"

    },
    // you can use the normal px size for margins or you can use theme.spacing
    input: {
        color: "white",
        marginLeft: theme.spacing(2)
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    icons: {
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
        marginLeft: theme.spacing(2)
    },
    searchButton: {
        marginRight: theme.spacing(2),
        // toggle between search input and icons display
        [theme.breakpoints.up("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
        },
    },
    cancel: {
        // to make sure the cancel icon doesnt show when in full screen
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    }
}));

const Navbar = () => {
    // usestyle to change the styles of elements
    // useState to be able to change on click
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
        <AppBar position="fixed"><Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                OSGbusiness
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                OSG
            </Typography>
            <div className={classes.search}>
                <Search />
                <InputBase placeholder="Search ..." className={classes.input} />
                <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
            </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                <Badge badgeContent={3} color="error" className={classes.badge}>
                    <MailIcon color="white" />
                </Badge>
                <Badge badgeContent={5} color="error" className={classes.badge}>
                    <Notifications color="white" />
                </Badge>
                <Avatar className={classes.badge} alt="Remy Sharp" src="https://www.pexels.com/photo/woman-among-green-willow-leaves-11057172/" />
            </div>
        </Toolbar></AppBar>
    );
}

export default Navbar;
