import useStyles from "@frontEnd/styles/Style";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const EventTitle = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.eventTitle}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            pt: "6rem",
            color: "white",
            textAlign: "center",
            textShadow: " 0 3px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          {props.title}
        </Typography>
      </Container>
    </Box>
  );
};
