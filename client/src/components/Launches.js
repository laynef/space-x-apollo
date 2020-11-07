import * as React from "react";
import { loader } from 'graphql.macro';
import { useQuery } from "@apollo/react-hooks";
import logo from "../images/logo.svg";


function Launches() {
    const gql = loader('../graphql/launches.graphql');
    const { loading, error, data } = useQuery(gql);

    return (
        <div className="App">
            <div className="App-header">
                {data && (
                    <div className="w-100 d-flex flex-wrap align-items-center justify-content-center">
                        {data.launches.map((launch, key) => (
                            <div className="card text-dark p-2 m-2" key={key}>
                                <img src={launch.links.patch.small} alt="" />
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

export default Launches;