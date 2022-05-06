import Head from "next/head";
import { useSelector } from "react-redux";
import React from "react";
import MeetupList from "../../components/meetups/MeetupList";

export default function Favorite() {
  const favoriteList = useSelector((state) => state.main.favoriteList);

  let mainContent = <MeetupList meetups={favoriteList} />;

  if (favoriteList.length === 0) {
    mainContent = (
      <div>
        <p>No favorite meetups yet...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Favorite Meetups</title>
        <meta name="description" content="Store your favorite!" />
      </Head>
      {mainContent}
    </>
  );
}
