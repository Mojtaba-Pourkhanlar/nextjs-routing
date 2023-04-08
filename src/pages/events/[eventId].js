import { useRouter } from "next/router";
import { getEventById } from "@/data";
import { Toastify } from "@frontEnd/helpers";
import { Box, Container, Typography } from "@mui/material";
import { EventLogistics } from "@frontEnd/components/events/eventComponents/EventLogistics";

const EventId = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return Toastify("No event found! 😒", "error");
  }

  const summary = {
    width: "100%",
    height: "30vh",
    backgroundImage: "linear-gradient(to bottom left,  #008b79, #1180a1)",
  };

  return (
    <>
      <Box style={summary}>
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
            {event.title}
          </Typography>
        </Container>
      </Box>
      <EventLogistics />
    </>
  );
};

export default EventId;
