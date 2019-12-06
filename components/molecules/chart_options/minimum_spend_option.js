import React from 'react';
import PropTypes from 'prop-types';
import {InputNumber, Slider} from "antd";

const MinimumSpendOption = (props) => {

    const { minimumSpendOnChange, minimumSpend } = props;

    return (
        <div>
            <h2>Minimum Spend</h2>
            <div className="minimumSpendHolder">
                <Slider
                    className="minimumSpendSlider"
                    min={0}
                    max={9999}
                    onChange={minimumSpendOnChange}
                    step={0.01}
                />
                <InputNumber
                    className="minimumSpendDisplay"
                    min={0}
                    max={9999}
                    style={{ marginLeft: 16 }}
                    value={minimumSpend}
                    onChange={minimumSpendOnChange}
                />
            </div>
        </div>
    );
};

MinimumSpendOption.propTypes = {
    minimumSpend: PropTypes.number,
    minimumSpendOnChange: PropTypes.func
};

export default MinimumSpendOption;