import { React, useState } from "react";
import classes from "./search.module.css";

// import elements from material ui
import TextField from "@material-ui/core/TextField";
 
// import elements from react-bootstrap
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Search({ flitretion }) {
  const [value, upDateValue] = useState("");
  const handelChange = (e) => {
    upDateValue(e.target.value);
    flitretion(e.target.value);
  };

  return (
    <div className={classes.search}>
      <Container>
        <Row>
          <Col xs={12} sx={6} md={6} lg={9}>
            <div className={classes.input_search}>
              <TextField
                className={classes.TextField}
                id="outlined-search"
                label="Search For A County"
                type="search"
                variant="outlined"
                value={value}
                onChange={handelChange}
              />
            </div>
          </Col>

          <Col xs={12} sx={6} lg={3} md={6}>
            <div className={classes.select}>
              <select aria-label="Default select example">
                <option>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
