import React from 'react';
import {navigate} from 'gatsby';

import Header from '../components/Header';

const Test = () => (
    <div>
        <Header />
        <h1>This is a test page!</h1>
        <button onClick={() => navigate("/")}>Navigate to Homepage</button>
    </div>
    

)

export default Test;
