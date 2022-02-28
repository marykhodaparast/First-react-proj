import MeetupList from "../components/meetups/MeetupList";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "title",
    image:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg",
    address: "address",
    description: "description",
  },
  {
    id: "m2",
    title: "title2",
    image:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg",
    address: "address2",
    description: "description2",
  },
];
function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}
export default AllMeetupsPage;
