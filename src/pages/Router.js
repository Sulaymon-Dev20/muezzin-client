import {BrowserRouter, Route, Routes} from "react-router-dom";
import Daily from "./daily/index";
import Monthly from "./monthly/index";
import NotFound from "./pagesError/notFound/NotFound";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import rootReducer from "../redux/rootReducer";
import {Provider} from "react-redux";

const Router = () => {
    return (
        <BrowserRouter>
            <Provider store={rootReducer}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Daily/>}/>
                            <Route path="daily" element={<Daily/>}/>
                            <Route path="monthly" element={<Monthly/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Route>
                    </Routes>
                </LocalizationProvider>
            </Provider>
        </BrowserRouter>
    );
}
export default Router;