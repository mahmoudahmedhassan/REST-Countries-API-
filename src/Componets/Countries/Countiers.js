import { React, useState, useEffect } from "react";
import classes from "./countires.module.css";
import Search from "../search&filter/Search";
import axios from "axios";
import Card from "../Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Countiers() {
  const [countiers, setCountiers] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchCountiers = () => {
    axios
      .get(`https://restcountries.com/v2/all`)

      .then((res) => {
        setCountiers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCountiers();
  }, []);


  const flitretion = (value) => {
    setFilter(value);
  };
  const handlerName = () => {
    if (filter.length > 0) {
      return countiers.filter((el) =>
        el.name.includes(filter.charAt(0).toUpperCase() + filter.slice(1))
      );
    }
    return countiers;
  };
  const loading = (
    <>
      <Container>
        <Row>
          <Col sm={6} md={4} lg={3}>
            <Skeleton height='350px' width='250px' className={classes.skelton_loading} />
          </Col>
          <Col sm={6} md={4} lg={3}>
            <Skeleton height='350px' width='250px' className={classes.skelton_loading} />
          </Col>
          <Col sm={6} md={4} lg={3}>
            <Skeleton height='350px' width='250px' className={classes.skelton_loading} />
          </Col>
          <Col sm={6} md={4} lg={3}>
            <Skeleton height='350px' width='250px' className={classes.skelton_loading} />
          </Col>
        </Row>

      </Container>
    </>
  )




  return (

    <div className={classes.countiers}>
      <Search flitretion={flitretion} />
      {countiers.length > 0 ? (
        <Card Countries={handlerName()} />
      ) : (
        <div className={classes.loading} style={{ display: 'flex', margin: '20px' }}>
          {loading}
          {loading}
          {loading}
          {loading}
          {loading}
          {loading}
          {loading}
          {loading}

        </div>
      )}

      {/* <Container>
        <Row>
          {countiers &&
            countiers.map((country,index) => (

              <Col  sm={6} md={4} lg={3}>
                <Card key ={country.id}  country ={country} />
              </Col>

            ))}
        </Row>
      </Container> */}

    </div>
  );
}
