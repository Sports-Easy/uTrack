import React from 'react';
import PropTypes from "prop-types";
import { Radio } from "antd";
import RegionOption from "./region_option";

const GenderOption = (props) => {

    const { genderOnChange } = props;

    return (
        <div>
            <h2>Gender</h2>
            <Radio.Group defaultValue="" size="large" onChange={genderOnChange}>
                <Radio.Button value="Male">Male</Radio.Button>
                <Radio.Button value="Female">Female</Radio.Button>
                <Radio.Button value="">None</Radio.Button>
            </Radio.Group>
        </div>
    );
};

RegionOption.propTypes = {
    genderOnChange: PropTypes.func
};

export default GenderOption;