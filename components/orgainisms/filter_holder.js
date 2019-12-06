import {InputNumber, Slider} from "antd";
import PropTypes from "prop-types";
import React from "react";
import MinimumSpendOption from "../molecules/chart_options/minimum_spend_option";
import RegionOption from "../molecules/chart_options/region_option";
import GenderOption from "../molecules/chart_options/gender_option";

const FilterHolder = (props) => {

    const { minimumSpendOnChange, minimumSpend, regionOnChange, genderOnChange } = props;

    return (
        <div className="filterHolder">
            <MinimumSpendOption minimumSpend={minimumSpend} minimumSpendOnChange={minimumSpendOnChange}/>
            <RegionOption regionOnChange={regionOnChange}/>
            <GenderOption genderOnChange={genderOnChange}/>
        </div>
    );
};

FilterHolder.propTypes = {
    minimumSpend: PropTypes.number,
    minimumSpendOnChange: PropTypes.func,
    genderOnChange: PropTypes.func,
    regionOnChange: PropTypes.func
};

export default FilterHolder;