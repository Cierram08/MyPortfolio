import { ListItemText } from '@mui/material';
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from './actions';


export default function AppbarDesktop({ matches }) {

    return (
        <AppbarContainer>
            <AppbarHeader>From Beauty</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText href="./sliderimg/1.jpg" primary="Projects" />
                <ListItemText primary="Contact" />
                <ListItemText primary="About" />
            <AppbarHeader>to Tech</AppbarHeader>

            </MyList>
           
            <Actions matches={matches} />
        </AppbarContainer>

    );
}