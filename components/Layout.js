import React, { useContext } from "react";

import Head from "next/head";

import NextLink from "next/link";
import {
  AppBar,
  Badge,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Grid,
  Link,
  List,
  ListItem,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import ColoredLine from "../components/ColoredLine";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Layout({ title, description, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#f0c000",
      },
    },
  });

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("cartItems");
    router.push("/");
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Tienda Chayito` : "Tienda Chayito"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <Box position="static" sx={{ height: "25" }} className={classes.infobar}>
        <Toolbar>
          <Typography className={classes.infoEmail}>
            info@tiendachayito.com
          </Typography>
        </Toolbar>
      </Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>
                  Tienda Chayito
                </Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    "Cart"
                  )}
                </Link>
              </NextLink>

              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    className={classes.navbarButton}
                  >
                    {JSON.parse(userInfo).name}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                    <MenuItem onClick={loginMenuCloseHandler}>
                      My account
                    </MenuItem>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>Login</Link>
                </NextLink>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12} className={classes.footerInfo}>
              {" "}
              <Typography component="h1" variant="h1">
                {" "}
                Tienda Chayito
              </Typography>
              <ColoredLine color="green" />
              <Typography>
                {"Copyright © "} 2021 | Derechos reservados
              </Typography>
            </Grid>
            <Grid item md={4} xs={12} className={classes.footerInfo}>
              {" "}
              <Typography component="h1" variant="h1">
                {" "}
                Products
              </Typography>
              <ColoredLine color="green" />
              <List>
                <ListItem>
                  <Typography component="h3">Ropa para mujeres</Typography>
                </ListItem>
                <ListItem>
                  <Typography component="h3">Ropa para hombres</Typography>
                </ListItem>
                <ListItem>
                  <Typography component="h3">Ropa Infantil</Typography>
                </ListItem>
                <ListItem>
                  <Typography component="h3">Accesorios</Typography>
                </ListItem>
                <ListItem>
                  <Typography component="h3"> Telas</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={4} xs={12} className={classes.footerInfo}>
              {" "}
              <Typography component="h1" variant="h1">
                {" "}
                Further Infor
              </Typography>
              <ColoredLine color="green" />
              <ListItem>
                <Typography component="h3"> Home</Typography>
              </ListItem>
              <ListItem>
                <Typography component="h3"> About Us</Typography>
              </ListItem>
              <ListItem>
                <Typography component="h3"> Shop Location</Typography>
              </ListItem>
              <ListItem>
                <Typography component="h3"> FAQS</Typography>
              </ListItem>
              <ListItem>
                <Typography component="h3"> Contact</Typography>
              </ListItem>
            </Grid>
          </Grid>
        </footer>
      </ThemeProvider>
    </div>
  );
}
