import { getAllEvents } from "@/data";
import { EventList } from "@frontEnd/components/events/EventList";
import Layout from "@frontEnd/components/layout";
import React from "react";

export const HomePage = () => {
  const events = getAllEvents();
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <EventList list={events} />
      </Layout>
    </div>
  );
};
