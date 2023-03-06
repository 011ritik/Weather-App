import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./style.module.scss";
import { Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import WeatherResult from "../WeatherResult/WeatherResult";

function CityInput() {
    const [data, setData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const api_key = "3d229644ced354443aa2bbd02d3bb62d";
        const city = e.target.city.value;

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
            )
            .then((response) => {
                setData(response.data);
                console.log(data);
            });
    };

    return (
        <>
            <div className={style["main-div"]}>
                <h1>Weather</h1>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        {/* <Form.Text className={style['form-head']}>
                        Enter the city name
                    </Form.Text> */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city name"
                                name="city"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
            <WeatherResult data={data} />
        </>
    );
}

export default CityInput;
