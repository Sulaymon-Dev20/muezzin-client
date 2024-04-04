import * as React from 'react';
import {useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useDispatch} from "react-redux";
// import {setUrlParams} from "../../redux/daily/dailyReducer";

const defaultTheme = createTheme();

function Daily() {
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(setUrlParams)
    }, []);

    // const date = useSelector((state) => state.dailyReducer.date)
    const [date, setDate] = React.useState(null)
    // const shortDate = useSelector((state) => state.dailyReducer.shortDate)
    const [shortDate, setShortDate] = React.useState(null)
    // const fajrDegree = useSelector((state) => state.dailyReducer.fajrDegree)
    const [fajrDegree, setFajrDegree] = React.useState(null)
    // const ishaDegree = useSelector((state) => state.dailyReducer.ishaDegree)
    const [ishaDegree, setIshaDegree] = React.useState(null);
    // const calculationMethod = useSelector((state) => state.dailyReducer.calculationMethod)
    const [calculationMethod, setCalculationMethod] = React.useState(null)
    // const timeType = useSelector((state) => state.dailyReducer.timeType)
    const [timeType, setTimeType] = React.useState(null)
    // const calendarTypeEnum = useSelector((state) => state.dailyReducer.calendarTypeEnum)
    const [calendarTypeEnum, setCalendarTypeEnum] = React.useState(null)
    // const dateFormatEnum = useSelector((state) => state.dailyReducer.dateFormatEnum)
    const [dateFormatEnum, setDateFormatEnum] = React.useState(null)
    // const madhab = useSelector((state) => state.dailyReducer.madhab)
    const [madhab, setMadhab] = React.useState(null)


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item xs={false} sm={4} md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Typography component="h1" variant="h5">Sign in</Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                            <FormControl fullWidth>
                                <InputLabel>ShortDate</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={shortDate}
                                        label="ShortDate"
                                        onChange={(e) => console.log(e)}>
                                    <MenuItem value={null}>clear</MenuItem>
                                    <MenuItem value={"TODAY"}>TODAY</MenuItem>
                                    <MenuItem value={"TOMERROW"}>TOMERROW</MenuItem>
                                    <MenuItem value={"AFTER_TOMERROW"}>AFTER TOMERROW</MenuItem>
                                    <MenuItem value={"AFTER_AFTER_TOMERROW"}>AFTER AFTER TOMERROW</MenuItem>
                                    <MenuItem value={"SUNDAY"}>SUNDAY</MenuItem>
                                    <MenuItem value={"MONDAY"}>MONDAY</MenuItem>
                                    <MenuItem value={"TUESDAY"}>TUESDAY</MenuItem>
                                    <MenuItem value={"WEDNESDAY"}>WEDNESDAY</MenuItem>
                                    <MenuItem value={"THURSDAY"}>THURSDAY</MenuItem>
                                    <MenuItem value={"FRIDAY"}>FRIDAY</MenuItem>
                                    <MenuItem value={"SATURDAY"}>SATURDAY</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid container>
                                <Grid item xs={8}>
                                    <DatePicker
                                        label={"date"} slotProps={{textField: {fullWidth: true}}}
                                        onChange={e => setDate(e)}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Time</InputLabel>
                                        <Select value={timeType}
                                                label="CalculationMethod"
                                                onChange={e => setTimeType(e)}>
                                            <MenuItem value={"T12"}>T12</MenuItem>
                                            <MenuItem value={"T24"}>T24</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs>
                                    <TextField
                                        margin="normal"
                                        required={fajrDegree != null || ishaDegree != null}
                                        aria-errormessage={"fajrDegree & ishaDegree must be exist or must be not exist"}
                                        fullWidth
                                        name="Farj Degree"
                                        label="Farj Degree"
                                        type="number"
                                        defaultValue={fajrDegree}
                                        inputProps={{
                                            step: "0.1"
                                        }}
                                        onChange={(e) => setFajrDegree(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <TextField
                                        margin="normal"
                                        required={fajrDegree != null || ishaDegree != null}
                                        fullWidth
                                        name="Isha Degree"
                                        label="Isha Degree"
                                        step="0.01"
                                        type="number"
                                        defaultValue={ishaDegree}
                                        inputProps={{
                                            step: "0.1"
                                        }}
                                        onChange={e => setIshaDegree(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <FormControl fullWidth>
                                <InputLabel>CalculationMethod</InputLabel>
                                <Select value={calculationMethod}
                                        label="CalculationMethod"
                                        onChange={e => setCalculationMethod(e.target.value)}>
                                    <MenuItem value={null}>clear</MenuItem>
                                    <MenuItem value={"MUSLIM_WORLD_LEAGUE"}>MUSLIM WORLD LEAGUE</MenuItem>
                                    <MenuItem value={"EGYPTIAN"}>EGYPTIAN</MenuItem>
                                    <MenuItem value={"KARACHI"}>KARACHI</MenuItem>
                                    <MenuItem value={"UMM_AL_QURA"}>UMM AL QURA</MenuItem>
                                    <MenuItem value={"DUBAI"}>DUBAI</MenuItem>
                                    <MenuItem value={"MOON_SIGHTING_COMMITTEE"}>MOON SIGHTING COMMITTEE</MenuItem>
                                    <MenuItem value={"NORTH_AMERICA"}>NORTH AMERICA</MenuItem>
                                    <MenuItem value={"KUWAIT"}>KUWAIT</MenuItem>
                                    <MenuItem value={"QATAR"}>QATAR</MenuItem>
                                    <MenuItem value={"SINGAPORE"}>SINGAPORE</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel>CalendarTypeEnum</InputLabel>
                                <Select value={dateFormatEnum}
                                        label="CalendarTypeEnum"
                                        onChange={e => console.log(e)}>
                                    <MenuItem value={null}>clear</MenuItem>
                                    <MenuItem value={"ISO_8601_FORMAT"}>ISO 8601 FORMAT</MenuItem>
                                    <MenuItem value={"SLASH_FORMAT"}>SLASH FORMAT</MenuItem>
                                    <MenuItem value={"AMERICAN_FORMAT"}>AMERICAN FORMAT</MenuItem>
                                    <MenuItem
                                        value={"LOCALIZED_LONG_FORMAT_WITH_MONTH_NAME"}>LOCALIZED LONG FORMAT WITH MONTH
                                        NAME</MenuItem>
                                    <MenuItem
                                        value={"LOCALIZED_SHORT_FORMAT_WITH_MONTH_NAME"}>LOCALIZED SHORT FORMAT WITH
                                        MONTH NAME</MenuItem>
                                    <MenuItem
                                        value={"WEEKDAY_MONTH_DAY_YEAR_FORMAT"}>WEEKDAY MONTH DAY YEAR FORMAT</MenuItem>
                                    <MenuItem value={"UNIX_TIMESTAMP"}>UNIX TIMESTAMP</MenuItem>
                                    <MenuItem value={"ORDINAL_DATE_FORMAT"}>ORDINAL DATE FORMAT</MenuItem>
                                    <MenuItem value={"YEAR_DATE_FORMAT"}>YEAR DATE FORMAT</MenuItem>
                                    <MenuItem value={"DAY_FORMAT"}>DAY FORMAT</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel>madhab</InputLabel>
                                <Select value={madhab}
                                        label="madhab"
                                        onChange={e => console.log(e)}>
                                    <MenuItem value={"Hanafi"}>Hanafi</MenuItem>
                                    <MenuItem value={"Shafi"}>Shafi</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
                                Generate
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Daily