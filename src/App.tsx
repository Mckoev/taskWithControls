import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import ControlButtons from "./components/controls/ControllButtons";
import {NAME_BUTTONS} from "./constants/constants";
import MuiButton from "./components/buttons/MuiButton";
import {useControlButtonLogic} from "./hooks/useControlButtonLogic";
import ControlAutocomplete from "./components/controls/ControlAutocomplete";
import text from "./mobx/stateControllButtons";
import {observer} from "mobx-react-lite";

const App = observer(() => {

    const {
        clear,
        setTextHelloWorld,
        showAlert,
        showAlertNumber
    } = useControlButtonLogic()

    return <Box sx={{
        bgcolor: "#f3f6f7",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 800,
        minHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        align: 'center',
    }}>
        <ControlButtons
            right={<>
                <MuiButton name={NAME_BUTTONS.CLEAR} onClick={clear}/>
                <MuiButton name={NAME_BUTTONS.HELLO_WORLD} onClick={setTextHelloWorld}/>
            </>}
            textInput={text.firstText} changeTextInput={text.changeFirstText.bind(text)}/>
        <ControlButtons
            right={<MuiButton name={NAME_BUTTONS.ALERT_TEXT} onClick={showAlert}/>}
            left={<MuiButton name={NAME_BUTTONS.ALERT_NUMBER} onClick={showAlertNumber}/>}
            textInput={text.secondText} changeTextInput={text.changeSecondText.bind(text)}>
        </ControlButtons>
        <ControlAutocomplete maxPrompts={3}/>
        <ControlAutocomplete maxPrompts={10}/>
    </Box>;
})

export default App;
