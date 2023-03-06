import { Container } from "react-bootstrap";
import style from "./style.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const WeatherResult = ({ data }) => {

    return (
        <div className={style["result-div"]}>
            {data && (
                <Container>
                    <Card className={style["weather-card"]}>
                        <h3 className={style["city-name"]}>{data.name}</h3>
                        <p
                                            className={
                                                style["weather-description"]
                                            }
                                        >
                                            {data.weather[0].description}
                                        </p>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <Card.Img
                                            variant="top"
                                            src={`icons/${data.weather[0].icon}.png`}
                                            className={style["weather-image"]}
                                        />
                                        
                                    </Col>
                                    <Col>
                                        <p className={style["temperature"]}>
                                            {data.main.temp}°
                                        </p>
                                        <p className={style['feels-like']}>
                                            Feels Like : {data.main.feels_like}°
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Card.Body className={style['weather-details']}>
                                    <p>Detail</p>
                                    <p>
                                        Min Temperature : {data.main.temp_min}°
                                    </p>
                                    <p>
                                        Max Temperature : {data.main.temp_max}°
                                    </p>
                                    <p>Humidity : {data.main.humidity}g/m³</p>
                                    <p>Wind : {data.wind.speed}m/s</p>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            )}
        </div>
    );
};

export default WeatherResult;
