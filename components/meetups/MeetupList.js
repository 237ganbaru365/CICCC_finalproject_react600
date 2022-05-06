import Grid from "@mui/material/Grid";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
    >
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </Grid>
    // <ul className={classes.list}>
    //   {props.meetups.map((meetup) => (
    //     <MeetupItem
    //       key={meetup.id}
    //       id={meetup.id}
    //       image={meetup.image}
    //       title={meetup.title}
    //       address={meetup.address}
    //     />
    //   ))}
    // </ul>
  );
}

export default MeetupList;
