import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: 'atuo',

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SubmissionNavbar = ({ sortOrder, setSortOrder, submissionType, setSubmissionType }) => {
    

    const handleChange = (event, newSubmissionType) => {
        console.log(newSubmissionType);
        setSubmissionType(newSubmissionType);
    };

    const handleChangeSortOrder = (event) => {
        setSortOrder(event.target.value);
    };


    return (
        <Toolbar sx={{
            marginLeft: '10rem',
            width: '80vw',
            marginTop: '2rem',
        }}>
            <Box sx={{ width: '70%', marginLeft: '0px' }}>
                <Tabs
                    value={submissionType}
                    onChange={handleChange}
                    textColor="green"
                    aria-label="secondary tabs example"
                    // color blue
                    TabIndicatorProps={{ style: { background: 'green' } }}
                    sx={{ marginLeft: '0px' }}
                >
                    <Tab value={"one"} label="All Submissions" sx={{
                        fontFamily: 'Poppins', textTransform: 'none', fontWeight: 'bold'
                    }} />
                    <Tab value={"two"} label="Favourite Submissions" sx={{
                        fontFamily: 'Poppins', textTransform: 'none', fontWeight: 'bold'
                    }} />
                </Tabs>
            </Box>
            <Search sx={{
                marginLeft: '100px',
                marginRight: '40px',
                width: '20%'
            }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    sx={
                        {
                            fontFamily: 'Poppins',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            border: '1px solid black',
                            borderRadius: '100px',
                            width: '100%',
                        }
                    }
                />
            </Search>
            <Select
                value={sortOrder}
                // label="sortOrder"
                onChange={handleChangeSortOrder}
                sx={{
                    fontFamily: 'Poppins',
                    border: '1px solid black',
                    borderRadius: '100px',
                    width: '10%',
                    height: '40px',
                }}
            >
                <MenuItem value="newest" >Newest</MenuItem>
                <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
        </Toolbar>
    );
}

export default SubmissionNavbar;