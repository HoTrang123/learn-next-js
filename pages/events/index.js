import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import EventList from '../../components/event/event-list';
import EventSearch from '../../components/event/event-search';
import { getAllEvents } from '../../dummy-data';

function AllEventPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const path = `/events/${year}/${month}`;

    router.push(path);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventPage;
