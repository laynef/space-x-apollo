import * as React from "react";
import { loader } from 'graphql.macro';
import { useQuery } from "@apollo/react-hooks";
import logo from "../images/logo.svg";


function Rockets() {
    const gql = loader('../graphql/rockets.graphql');
    const { loading, error, data } = useQuery(gql);

    return (
        <div className="App">
            <div className="App-header">
                {loading && (
                    <>
                        <img className="App-logo" src={logo} alt="" />
                        <p>Loading...</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Rockets;