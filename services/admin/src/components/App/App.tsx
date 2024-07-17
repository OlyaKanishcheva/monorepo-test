import { Outlet } from 'react-router-dom'
import * as classes from './App.module.scss';

export const App = () => {
    return (
        <div
            data-testid={"App.Admin.DataTestId"}
            className={classes.header}
        >
            <h1>ADMIN MODULE</h1>
            <Outlet />
        </div>
    )
}