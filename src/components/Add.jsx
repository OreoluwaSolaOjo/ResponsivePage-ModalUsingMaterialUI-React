import { Button, Container, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, TextField } from "@material-ui/core";
import Tooltip from '@mui/material/Tooltip';
import { AddCircle } from '@material-ui/icons';
import { useState } from "react";
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import React from "react";

const useStyles = makeStyles((theme) => ({
    add: {
        position: "fixed",
        bottom: 20,
        right: 20,
        height: "50px",
        width: "50px",
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        borderRadius: "none",
        [theme.breakpoints.down("sm")]: {
            height: "100vh",
            width: "100vh",
        },
    },
    item: {
        marginTop: theme.spacing(1),
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        padding: theme.spacing(1)
    },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };
    return (
        <>
            <Tooltip title="Add" aria-label="add" color="primary" onClick={() => setOpen(true)}>

                <AddCircle className={classes.add} />

            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autocomplete="off">
                        <div className={classes.item}>
                            <TextField id="standard-basic" label="Title" variant="standard" size="small" style={{ width: "100%" }} />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="filled-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                defaultValue="Tell your story ..."
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="Visibility" value="Public" style={{ width: "100%" }}>
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>

                        </div>
                        <div className={classes.item}>
                            <FormLabel id="demo-radio-buttons-group-label">Who can Comment?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Everybody" />
                                <FormControlLabel value="male" control={<Radio />} label="My Friends" />
                                <FormControlLabel value="other" control={<Radio />} label="Nobody" />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary" onClick={() => setOpenAlert(true)}>
                                Create
                            </Button>
                            <Button variant="outlined" color="secondary" style={{ marginLeft: 20, }} onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Add;
