import Head from "next/head";
// our-domain.com/new-meetup
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetUpHandler(enteredMeetupData) {
    // since we fetch a data from special "api" folder, fe need to name it as same
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Adding new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </>
  );
}

export default NewMeetupPage;
