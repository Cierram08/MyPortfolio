import { IconButton } from '@mui/material';
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from './actions';
import { useUIContext } from '../../context/ui';

export default function AppbarMobile({ matches }) {

    const { setDrawerOpen } = useUIContext()

    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4">
                From Beauty To Tech
            </AppbarHeader>
            <IconButton>
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}