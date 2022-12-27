import React from 'react';
import { Link } from 'react-router-dom'
import "./Error.scss";

const Error = () => {
    return(
            <section className="section-error">
                <div className="error-center">
                    <img src="https://moroccan-home-treasures.com/htdocs_error/something-lost.png" alt="404 Error" />
                    <h1>Page Not Found!</h1>
                    <div>
                        <Link to='./' className="btn">Back to home</Link>
                    </div>              
                </div>
            </section>
    )
}

export default Error;