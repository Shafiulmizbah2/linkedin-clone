import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Avatar, Button, Paper, Typography } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const PostWrapper = styled(Paper)(({ theme }) => ({
  padding: "2vh",
  marginBottom: "1rem",
  width: "80%",
  minWidth: "200px",
}));

const PostHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: ".5rem",
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const PostHeaderInfo = styled(Box)(({ theme }) => ({
  marginLeft: ".6rem",
}));
const PostBody = styled(Box)(({ theme }) => ({}));

function Post({ name, description, post, photoUrl }) {
  return (
    <PostWrapper>
      <PostHeader>
        <Avatar src={photoUrl} alt="Post author" />
        <PostHeaderInfo>
          <Typography variant="paragraph" color="textPrimary">
            {name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {description}
          </Typography>
        </PostHeaderInfo>
      </PostHeader>
      <PostBody>
        <Typography variant="subtitle1" color="textPrimary">
          {post}
        </Typography>
      </PostBody>
      <ButtonWrapper>
        <Button startIcon={<ThumbUpAltOutlinedIcon />} sx={{ color: "#555" }}>
          Like
        </Button>
        <Button startIcon={<ChatOutlinedIcon />} sx={{ color: "#555" }}>
          Comment
        </Button>
        <Button startIcon={<ShareIcon />} sx={{ color: "#555" }}>
          Share
        </Button>
        <Button startIcon={<SendIcon />} sx={{ color: "#555" }}>
          Send
        </Button>
      </ButtonWrapper>
    </PostWrapper>
  );
}

export default Post;
