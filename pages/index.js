import EventList from '../components/event/event-list';
import { getAllEvents } from '../helpers/api-util';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getAllEvents();

  return {
    props: {
      events: featuredEvents
    }
  };
}

export default HomePage;
