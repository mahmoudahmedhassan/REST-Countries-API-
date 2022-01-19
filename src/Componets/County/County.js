/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./county.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function County() {
  const [country, setCountry] = useState([]);
  let { name } = useParams();

  const fetchCounty = () => {
    axios
      .get(`https://restcountries.com/v2/name/${name}`)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCounty();
    
     }, [])

  const data =
    country &&
    country.map((el) => (
      <>

        <Col xs={12} sx={12} md={12} lg={6}>
          <div className={classes.flag}>
            {
               <Image src={ el.flag } thumbnail />  

            }
          </div>
        </Col>

        <Col xs={12} sx={12} md={12} lg={6}>
          <div className={classes.details}>
            <h1>{el.name}</h1>
            <div className={classes.details_lists}>
              <ul>
                <li>
                  {" "}
                  <span> Native Name</span>:{el.nativeName}
                </li>
                <li>
                  <span>Region</span>: {el.region}
                </li>
                <li>
                  {" "}
                  <span>Capital</span> : {el.capital}
                </li>
                <li>
                  <span>Currencies</span>: {el.currencies[0].code}
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <span>Population</span>:{el.population}
                </li>
                <li>
                  {" "}
                  <span>subregion</span>: {el.subregion}
                </li>
                <li>
                  <span>topLevelDomain</span> : {el.topLevelDomain}
                </li>

                {/* <li>Languages :<p>{el.languages[0].name}</p> </li> */}

                <li>
                  <span>languages</span> :
                  {el.languages.map((el) => (
                    <span key={el.id}>{el.name}</span>
                  ))}
                </li>
              </ul>
            </div>
            <div className={classes.border_container}>
              <p>border container :</p>
              <p>
                {" "}
                {el.borders.map((el) => (
                  <span className={classes.borders_value}>{el}</span>
                ))}
              </p>
              <div></div>
            </div>
          </div>
        </Col>
      </>
    ));

  return (
    <div className={classes.main}>
      <Container>
          <Link to="/">

        <button className={classes.back}>
          <BsArrowLeft /> 
            {" "}
            <span>Back</span>{" "}
        </button>

        </Link>

      </Container>
      <Container>
        <Row>{data}</Row>
      </Container>
    </div>
  );
}

export default County;
