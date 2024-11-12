import Header2 from '../components/header'
import { Outlet } from 'react-router-dom';

export default function Layout() {


    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor:"#f1f2f3"
        }}>
            {<Header2 />}
            <div style={{
                flex: 1,
                marginTop: '1px',
                padding: "20px",
                overflowY: "auto",
            }}>
                <Outlet />
            </div>
        </div>
    )
}