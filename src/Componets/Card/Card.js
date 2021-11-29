import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: 'var(--white)',
    margin: 'auto',
    marginBottom: '30px',

  },
  media: {
    height: 140,
  },
  Span: {
     fontWeight: "700",
  },
 
});

export default function MediaCard({ Countries }) {
  const classes = useStyles();

  const data = Countries.map(

    ({ flag, name, population, region, capital, numericCode }) => (

      <Col sm={6} md={4} lg={3} key={numericCode}>

        <Link to={`/Countiers/${name}`} style={{textDecoration:'none'}}>
          <Card className={classes.root} >

            <CardActionArea>
              {flag ? (
                <CardMedia className={classes.media} image={flag} />
              ) : (
                <span> loading... </span>
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>
                    <span className={classes.Span}>Population</span>  :
                    {population}
                  </p>
                  <p>
                    <span className={classes.Span}>Region</span> : {region}
                  </p>
                  <p>
                    <span className={classes.Span}>Capital</span> : {capital}
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Col>
    )
  );

  return (
    <Container>
      <Row>{data}</Row>
    </Container>
  );
}
