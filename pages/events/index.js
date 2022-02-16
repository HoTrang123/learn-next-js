import React, { Fragment } from 'react';
import EventList from '../../components/event/event-list';
import EventSearch from '../../components/event/event-search';
import { getAllEvents } from '../../dummy-data';

function AllEventPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventPage;
