import { connectToDatabase } from "../../lib/db";

export async function getAllPosts() {
  const client = await connectToDatabase();
  const db = client.db();

  const data = await db.collection("PostedItem").find({}).toArray();

  return data;
}

export async function getPostsById(id) {
  const allPosts = await getAllPosts();
  return allPosts.find((event) => event.id === id);
}

// export async function getFeaturedEvents() {
//   const allEvents = await getAllEvents();
//   return allEvents.filter((event) => event.isFeatured);
// }

// export async function getFilteredEvents(dateFilter) {
//   const { year, month } = dateFilter;

//   const allEvents = await getAllEvents();

//   let filteredEvents = allEvents.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
//     );
//   });

//   return filteredEvents;
// }
