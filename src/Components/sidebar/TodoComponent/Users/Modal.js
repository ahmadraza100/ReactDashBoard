import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useEffect } from "react"


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '47ch',
            display: "flex",
            height:"8ch"
            
        },
    },
}));



const Modaal = ({ close, final, Edit, Update, Op }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [Close, setClose] = useState(false);
    const [Data, setData] = useState([]);
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Roles, setRoles] = useState();
    const [Permission, setPermission] = useState();
    const [Flag, setFlag] = useState(false);

    let submit = () => {

        if (Name !== "" && Email !== "" && Roles !== "" && Permission !== "") {
            let obj = {
                name: Name,
                email: Email,
                roles: Roles,
                permission: Permission
            }
            final(obj);
            setData([...Data, obj]);
            setName("");
            setEmail("")
            setRoles("");
            setPermission("")
            close(Close)




        }
        else {
            alert("Please Enter all feilds")
        }
    }


    useEffect(() => {
        setFlag(Op)
        setName(Edit.name)
        setEmail(Edit.email)
        setRoles(Edit.roles)
        setPermission(Edit.permission)

    }, [Edit, setFlag, Op]);




    const update = () => {
        if (Name !== "" && Email !== "" && Roles !== "" && Permission !== "") {

            let obj = {
                name: Name,
                email: Email,
                roles: Roles,
                permission: Permission
            }
            Update(obj)
            setName("");
            setEmail("")
            setRoles("");
            setPermission("");
            close(Close)

        }
        else {
            alert("Please Enter all feilds")
        }
    }


    const onCloseModal = () => {
        setOpen(false);
        setClose(true);
        close(Close)


    }


    return (
        <div>
            <Modal open={open} onClose={onCloseModal} center>
                <form className={classes.root} noValidate autoComplete="off"  >

                    <TextField className="feilds" id="standard-basic" label="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                    <TextField className="feilds" id="standard-basic" label="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField className="feilds" id="standard-basic" label="Roles" value={Roles} onChange={(e) => setRoles(e.target.value)} />
                    <TextField className="feilds" id="standard-basic" label="Permission" value={Permission} onChange={(e) => setPermission(e.target.value)} />
                    {(Flag === true) ?
                        <Button variant="contained" color="primary" onClick={update}>Update</Button> :
                        <Button variant="contained" color="primary" onClick={submit}>Add</Button>
                    }
                </form>
            </Modal>
        </div>
    );
};

export default Modaal;