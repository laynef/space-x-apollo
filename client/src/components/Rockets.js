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
                    <div className="w-100 d-flex flex-column align-items-center">
                        {data.rockets.map((rocket, key) => (
                            <div key={key}>
                                
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