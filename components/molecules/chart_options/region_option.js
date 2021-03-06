import React from 'react';
import PropTypes from 'prop-types';
import { Select } from "antd";
const { Option } = Select;
const RegionOption = (props) => {

    const { regionOnChange } = props;

    return (
        <div className="regionHolder">
            <h2>Select Region</h2>
            <Select defaultValue="" style={{ width: 120}} onChange={regionOnChange}>
                    <Option value=""></Option>
                    <Option value="AL">Alabama</Option>
                    <Option value="AK">Alaska</Option>
                    <Option value="AZ">Arizona</Option>
                    <Option value="AR">Arkansas</Option>
                    <Option value="CA">California</Option>
                    <Option value="CO">Colorado</Option>
                    <Option value="CT">Connecticut</Option>
                    <Option value="DE">Delaware</Option>
                    <Option value="FL">Florida</Option>
                    <Option value="GA">Georgia</Option>
                    <Option value="HI">Hawaii</Option>
                    <Option value="ID">Idaho</Option>
                    <Option value="IL">Illinois</Option>
                    <Option value="IN">Indiana</Option>
                    <Option value="IA">Iowa</Option>
                    <Option value="KS">Kansas</Option>
                    <Option value="KY">Kentucky</Option>
                    <Option value="LA">Louisiana</Option>
                    <Option value="ME">Maine</Option>
                    <Option value="MD">Maryland</Option>
                    <Option value="MA">Massachusetts</Option>
                    <Option value="MI">Michigan</Option>
                    <Option value="MN">Minnesota</Option>
                    <Option value="MS">Mississippi</Option>
                    <Option value="MO">Missouri</Option>
                    <Option value="MT">Montana</Option>
                    <Option value="NE">Nebraska</Option>
                    <Option value="NV">Nevada</Option>
                    <Option value="NH">New Hampshire</Option>
                    <Option value="NJ">New Jersey</Option>
                    <Option value="NM">New Mexico</Option>
                    <Option value="NY">New York</Option>
                    <Option value="NC">North Carolina</Option>
                    <Option value="ND">North Dakota</Option>
                    <Option value="OH">Ohio</Option>
                    <Option value="OK">Oklahoma</Option>
                    <Option value="OR">Oregon</Option>
                    <Option value="PA">Pennsylvani</Option>
                    <Option value="RI">Rhode Island</Option>
                    <Option value="SC">South Carolina</Option>
                    <Option value="SD">South Dakota</Option>
                    <Option value="TN">Tennessee</Option>
                    <Option value="TX">Texas</Option>
                    <Option value="UT">Utah</Option>
                    <Option value="VT">Vermont</Option>
                    <Option value="VA">Virginia</Option>
                    <Option value="WA">Washington</Option>
                    <Option value="WV">West Virginia</Option>
                    <Option value="WI">Wisconsin</Option>
                    <Option value="WY">Wyoming</Option>
            </Select>
        </div>
    );
};

RegionOption.propTypes = {
    regionOnChange: PropTypes.func
};

export default RegionOption;