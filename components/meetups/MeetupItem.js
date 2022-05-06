import { useRouter } from "next/router";
import { makeStore } from "../../redux/store";
import { Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavAction, removeFavAction } from "../../redux/actions/main";

function MeetupItem(props) {
  const router = useRouter();

  // use redux for components
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.main.favoriteList);

  // handling favorite button
  const addFavoriteHandler = () => {
    dispatch(addFavAction(props));
  };

  const removeFavoriteHandler = () => {
    dispatch(removeFavAction(props.id));
  };

  // check favorite visible
  const isFound = favoriteList.find((data) => data.id === props.id);

  // navigate programatically
  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <Grid item xs={12} sm={4} md={4}>
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <div className={classes.actions}>
              {isFound ? (
                // Liked
                <FavoriteIcon
                  sx={{ color: "#3ec9a6", fontSize: 30 }}
                  onClick={removeFavoriteHandler}
                />
              ) : (
                // Not Liked
                <FavoriteBorderIcon
                  sx={{ color: "#3ec9a6", fontSize: 30 }}
                  onClick={addFavoriteHandler}
                />
              )}

              <Button size="small" onClick={showDetailsHandler}>
                Show Detail
              </Button>
            </div>
          </div>
        </Card>
      </li>
    </Grid>
  );
}

export default MeetupItem;
