import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    
                    <Typography
                        // variant="h6"
                        noWrap
                        // component="p"
                        // href="/"
                        sx={{
                            mr: 2,
                            // display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'monospace',
                            // fontWeight: 700,
                            // letterSpacing: '.3rem',
                            // color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Кредит-центр
                    </Typography>

                    
                </Toolbar>
            </Container>
        </AppBar>

    );
}

export default Header;