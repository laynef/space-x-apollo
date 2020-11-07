import * as React from "react";
import { loader } from 'graphql.macro';
import { useQuery } from "@apollo/react-hooks";
import logo from "../images/logo.svg";


function Rockets() {
    const gql = loader('../graphql/rockets.graphql');
    const { loading, error, data } = useQuery(gql);
    console.log(data)

    return (
        <div className="App">
            <div className="App-header">
                {data && (
                    <div className="w-100 d-flex flex-column align-items-center justify-content-start">
                        {data.rockets.map((rocket, key) => (
                            <div className="card text-dark p-2 m-2" key={key}>
                                <p>{rocket.id}</p>
                            </div>
                        ))}
                    </div>
                )}
                {loading && (
                    <>
                        <img className="App-logo" src={logo} alt="" />
                        <p>Loading...</p>
                    </>
                )}
                {error && (
                    <>
                        <img className="App-logo" src={logo} alt="" />
                        <p>Internal Server Error</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Rockets;