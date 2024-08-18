import React from "react";
import { testContainer } from './test.module.css';

const TestComponent = () => {

    console.log(testStyles);
    return (
        <div className={testStyles.testContainer}>
            Test Component
        </div>
    );
};

export default TestComponent;