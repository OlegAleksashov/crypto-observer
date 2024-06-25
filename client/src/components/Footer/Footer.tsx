import { FC } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#2b4766",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          bottom: "0",
          left: "0",
        }}
      >
        <Divider />
        <Box
          sx={{
            backgroundColor: "#2b4766",
            position: "relative",
            padding: theme.spacing(0.25),
          }}
        >
          <Grid container spacing={0}>
            <Hidden mdDown>
              <Grid container item xs={12} md={4}>
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 0,
                  }}
                >
                  <ListItemButton component="a" href="#">
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          color={theme.palette.text.secondary}
                        >
                          Privacy Policy
                        </Typography>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton component="a" href="#">
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          color={theme.palette.text.secondary}
                        >
                          Terms of Use
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </List>
              </Grid>
            </Hidden>
            <Grid container item xs={12} md={4} justifyContent="center">
              <List>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        color={theme.palette.text.secondary}
                      >
                        Copyright &copy; {new Date().getFullYear()} Oleg
                        Aleksashov.
                      </Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid container item xs={12} md={4} justifyContent="center">
              <List>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        color={theme.palette.text.secondary}
                      >
                        Data provided by{" "}
                        <Link
                          href="https://www.coingecko.com/"
                          target="_blank"
                          rel="noreferrer"
                          sx={{
                            color: theme.palette.text.secondary,
                          }}
                        >
                          CoinGecko
                        </Link>
                        .
                      </Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
