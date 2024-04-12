import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/system";

const CustomCardContent = styled(CardContent)({
  padding: 1,
  margin: 1,
  "&:last-child": {
    paddingBottom: 1,
    marginRight: 0,
  },
});

export const PersonalCard = ({ text, value, color, icon }) => {
  return (
    <Card sx={{ padding: 0, margin: 0, backgroundColor: "rgb(48, 59, 107)" }}>
      <CustomCardContent>
        <Grid container spacing={1} sx={{ paddingBottom: 0 }}>
          <Grid item sx={{ paddingBottom: 0 }}>
            <Typography sx={{ padding: 0, margin: 0 }} gutterBottom>
              {text}
            </Typography>
            <Typography variant="h5">{value}</Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: color,
                height: 56,
                width: 56,
                margin: 0,
              }}
            >
              <FontAwesomeIcon icon={icon} size="lg" />
            </Avatar>
          </Grid>
        </Grid>
      </CustomCardContent>
    </Card>
  );
};