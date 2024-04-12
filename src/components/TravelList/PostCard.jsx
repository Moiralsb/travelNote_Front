import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
    margin: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  },
  media: {
    height: 160,
  },
}));

const PostCard = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.imageUrl} // 假设每个笔记有对应的imageUrl属性
          title={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            By {post.authorName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;