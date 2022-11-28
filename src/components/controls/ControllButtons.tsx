import React, {ReactNode} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IControlButtons {
    textInput: string;
    changeTextInput: (e: string) => void;
    right?: ReactNode;
    left?: ReactNode;
    children?: ReactNode;
}

const ControlButtons = ({textInput, changeTextInput, right, left}: IControlButtons) => {

    return (
        <Box sx={{
            bgcolor: '#d2caca',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 2
        }}>

            <Box sx={{
                display: 'flex',
            }}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    {left}
                </Box>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 1,
                        borderRadius: 2,
                        p: 2,
                        minWidth: 500,
                        maxWidth: 600,
                        minHeight: 150,
                    }}
                ><TextField id="outlined-basic" label="Outlined" variant="outlined" value={textInput}
                            onChange={(e) => changeTextInput(e.target.value)}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    {right}
                </Box>
            </Box>
            <hr style={{
                height: '3px',
                width: '100%',
            }}/>
        </Box>
    );
}

export default ControlButtons;