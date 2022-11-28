import React from 'react';
import {Button} from "@mui/material";

interface IMuiButton {
    onClick: () => void;
    name: string
}

function MuiButton({onClick, name}: IMuiButton) {

    return (
        <Button variant="outlined" onClick={onClick} sx={{margin: 3}}>{name}</Button>
    );
}

export default MuiButton;