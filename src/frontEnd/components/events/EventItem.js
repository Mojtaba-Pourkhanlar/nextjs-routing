import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import dateSVG from "@frontEnd/assets/date.svg";
import locationSVG from "@frontEnd/assets/location.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  const cardContainer = {
    boxShadow:
      "0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "white",
    margin: "1rem",
  };

  return (
    <div style={cardContainer}>
      <Card sx={{ display: "block" }}>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "290px" }}
          image={image}
          alt={title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, m: "25px 10px 10px" }}
            >
              {title}
            </Typography>
            <CardContent sx={{ display: "flex" }}>
              <Image src={dateSVG} alt="date" width={30} height={30} />
              <Typography variant="subtitle1" sx={{ mx: "10px" }}>
                {humanReadableDate}
              </Typography>
            </CardContent>
            <CardContent sx={{ display: "flex" }}>
              <Image src={locationSVG} alt="date" width={30} height={30} />
              <Typography variant="subtitle1" sx={{ mx: "10px" }}>
                {formattedAddress}
              </Typography>
            </CardContent>
          </Box>
          <Box>
            <CardContent sx={{ display: "flex", justifyContent: "end" }}>
              <Link href={exploreLink} style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  endIcon={
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  }
                >
                  Explore Event
                </Button>
              </Link>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default EventItem;
