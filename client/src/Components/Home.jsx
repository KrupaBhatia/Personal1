import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <div className="background-image-animation">
                <div className="box-wrapper1">

                    <div id="card-box">
                        30 Days  validity <br /> Tourist eVisa <br />

                        <button id="box-id"> <Link id="apply-button-cards" to="/apply"> Apply Now </Link> </button>
                    </div>
                    <div id="card-box">
                        1 Years validity <br /> Tourist eVisa <br />
                        <button id="box-id"> <Link id="apply-button-cards" to="/apply"> Apply Now </Link> </button>
                    </div>
                    <div id="card-box">
                        5 Years validity <br /> Tourist eVisa <br />
                        <button id="box-id"> <Link id="apply-button-cards" to="/apply"> Apply Now </Link> </button>
                    </div>
                </div>

                {/*------------------------------------------------------------------------------------------------------------- */}

                <div className="box-wrapper2">
                    <div id="card-box">
                        30 Days  validity <br /> Business eVisa <br />
                        <button id="box-id"> <Link id="apply-button-cards" to="/apply"> Apply Now </Link> </button>
                    </div>
                    <div id="card-box">
                        1 Years validity <br /> Business eVisa  <br />
                        <button id="box-id"> <Link id="apply-button-cards" to="/apply"> Apply Now </Link> </button>
                    </div>
                    <div id="card-box">
                        5 Years validity <br /> Business eVisa <br />
                        <button id="box-id"> <Link id="apply-button-cards" to="/apply"> Apply Now </Link> </button>
                    </div>
                </div>

            </div>
           
            <ul className="text">

                <li>
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                </li>

                <br />

                <li>
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                    We are providing 30days, 1year, 5years validity visa
                </li>


            </ul>
        

        </>
    )
}
export default Home