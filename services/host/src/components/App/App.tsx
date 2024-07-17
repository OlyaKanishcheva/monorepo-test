import { Link, Outlet } from 'react-router-dom';
import { shopRoutes, adminRoutes } from '@packages/shared';

export const App = () => {
    return (
        <div data-testid={"App.DataTestId"}>
            <h1>Page</h1>
            <Link to={'/'}>
                Main
            </Link>
            <br />
            <Link to={adminRoutes.about}>
                About About
            </Link>
            <br />
            <Link to={shopRoutes.main}>
                Shop Main
            </Link>
            <br />
            <Link to={shopRoutes.second}>
                Shop Second
            </Link>
            <Outlet />
        </div>
    )
}