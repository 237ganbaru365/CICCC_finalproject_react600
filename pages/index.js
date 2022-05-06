import Head from "next/head";

// import { useEffect, useState } from "react/cjs/react.development";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  // in nomal react we use this syntax, but since it's back to empty html as a SPA, it's also gonna be a problem for SEO
  // so nextjs has another approach which called "page pre-render" for this
  // const [loadedMettups, setLoadedMeetyups] = useState([]);

  // useEffect(() => {
  //   // set a http request and fetch data
  //   setLoadedMeetyups(DUMMY_MEETUPS);
  // }, []);

  return (
    <>
      <Head>
        <title>CICCC Final Project</title>
        <meta
          name="description"
          content="Browse a huge list of hily active meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// // this function runs everytime for incoming requests
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: DUMMY_MEETUPS,
//   };
// }

// this function ONLY can use in page components
// getStaticProps does NOT allow us to change the name
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://fumina237:Na3579fumi@cluster0.s2s5v.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    // you need to always return an object here
    // IMPORTANT the object has included "props", and it has be named props
    // so that this component can recieve this props
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // to unlock the features called incremental Static Generation
    // revalidate needs a number of second to wait untill it regenerates this page for an incoming request
    revalidate: 1,
  };
}

export default HomePage;
