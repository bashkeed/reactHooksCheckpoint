import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



export default function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "10px", alignItems: "center" }}>
      <CardMedia sx={{ height: 400 }} image={posterURL} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description} <br />
          rating: {rating}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignItems: 'center' }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

