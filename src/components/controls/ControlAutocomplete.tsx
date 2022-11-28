import React, {ChangeEvent} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {getCountryByName} from "../../api/apiService";
import Autocomplete from '@mui/material/Autocomplete';
import countriesControl from "../../mobx/stateControlAutocomplete";
import {observer} from "mobx-react-lite";
import {ICountry} from "../../types/interfaces";

interface IAutoComplete {
    maxPrompts: number
}

const ControlAutocomplete = observer(({maxPrompts}: IAutoComplete) => {

    const loading = countriesControl.countries.length === 0;

    function changeText(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        countriesControl.changeRequest(e.target.value)
        getPrompt()
    }

    async function getPrompt() {
        const result = await getCountryByName(countriesControl.request)
        if (result.length > maxPrompts) {
            countriesControl.changeCountries(result.slice(0, maxPrompts))
        } else {
            countriesControl.changeCountries(result)
        }
    }

    return (
        <Box sx={{
            bgcolor: '#d2caca',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
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
            >
                <Autocomplete
                    sx={{width: 300}}
                    options={countriesControl.countries}
                    loading={loading}
                    autoHighlight
                    filterOptions={(x) => x}
                    getOptionLabel={(option: ICountry) => {
                        return option.fullName
                    }}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`${option.flag}`}
                                alt=""
                            />
                            {option.name} ({option.fullName})
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a country"
                            onChange={(e) => changeText(e)}
                        />
                    )}
                />
            </Box>

            <hr style={{
                height: '3px',
                width: '100%',
            }}/>
        </Box>
    );
})

export default ControlAutocomplete;