import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography, Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

const FeedContainer = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100%",
  flex: 0.6,
  padding: "2vh",
  overflowY: "auto",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  [theme.breakpoints.down("md")]: {
    flex: 1,
  },
}));

const InputContainer = styled("div")(({ theme }) => ({
  margin: "1rem",
  border: "1px solid #999",
  borderRadius: "100px",
  padding: ".2rem .2rem  .2rem .4rem ",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
}));

const Input = styled("input")(({ theme }) => ({
  width: "100%",
  padding: ".5rem",
  outline: "none",
  border: "none",
  color: theme.palette.text.secondary,
}));

const InputOptionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  padding: "0.5rem 1rem",
  borderRadius: "100px",
  "&:hover": {
    backgroundColor: "whitesmoke",
  },
}));

const Feed = () => {
  const [posts, setPost] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const SendPost = (e) => {
    e.preventDefault();
    console.log(input);

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      post: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <FeedContainer>
      <Paper
        elevation={0}
        component="form"
        sx={{
          width: "80%",
          minWidth: "200px",
          borderRadius: ".5rem",
          paddingBottom: ".5rem",
          marginBottom: "1rem",
        }}
        onSubmit={(e) => SendPost(e)}
      >
        <InputContainer>
          <CreateIcon color="disabled" fontSize="small" />
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write post"
          />
        </InputContainer>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%", padding: "0 2vh" }}
        >
          <InputOptionWrapper>
            <ImageIcon color="secondary" sx={{ marginRight: ".3rem" }} />
            <Typography variant="subtitle1">Photo</Typography>
          </InputOptionWrapper>
          <InputOptionWrapper>
            <VideocamIcon color="warning" sx={{ marginRight: ".3rem" }} />
            <Typography variant="subtitle1">Video</Typography>
          </InputOptionWrapper>
          <InputOptionWrapper>
            <DateRangeIcon color="success" sx={{ marginRight: ".3rem" }} />
            <Typography variant="subtitle1">Event</Typography>
          </InputOptionWrapper>
          <InputOptionWrapper>
            <CreateIcon color="action" sx={{ marginRight: ".3rem" }} />
            <Typography variant="subtitle1">Write an article</Typography>
          </InputOptionWrapper>
        </Grid>
      </Paper>
      <FlipMove>
        {posts.length > 0 &&
          posts.map(({ id, data: { name, description, post, photoUrl } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              post={post}
              photoUrl={photoUrl}
            />
          ))}
      </FlipMove>
    </FeedContainer>
  );
};

export default Feed;
