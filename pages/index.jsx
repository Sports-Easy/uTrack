import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { Line } from 'react-chartjs-2';
import data1 from '../MOCK_DATA';
import { Table } from 'antd';
import './index.less';
import { COUPON_COST } from "../Constants";
import GenderOption from "../components/molecules/chart_options/gender_option";
import RegionOption from "../components/molecules/chart_options/region_option";
import MinimumSpendOption from "../components/molecules/chart_options/minimum_spend_option";
import FilterHolder from "../components/orgainisms/filter_holder";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                [], // January
                [], // February
                [], // March
                [], // April
                [], // May
                [], // June
                [], // July
                [], // August
                [], // September
                [], // October
                [], // November
                [], // December
            ],
            filters: {
                minimumSpend: 5000,
                region: "",
                gender: "",
            }
        };

        this.sortUsersByBirthMonth(data1);

        this.sortUsersByBirthMonth = this.sortUsersByBirthMonth.bind(this);
        this.monthlyCouponCost = this.monthlyCouponCost.bind(this);
        this.cumulativeMonthlyCouponCost = this.cumulativeMonthlyCouponCost.bind(this);
        this.chartData = this.chartData.bind(this);
        this.regionOnChange = this.regionOnChange.bind(this);
    }

    /**
     * Basic Chart.js script for producing a responsive chart.
     * @param  {Array} data   2D array containing user data with `Object {}` type.
     */
    chartData(data){
        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Monthly Dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.monthlyCouponCost(data),
                },
                {
                    label: 'Cumulative Dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,0.4)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,0.4)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.cumulativeMonthlyCouponCost(data),
                }
            ]
        };
    }

    /**
     * Sorts users into arrays based on their birth month.
     * @param  {JSON} data  MOCK_DATA.js pre-generated user data.
     */
    sortUsersByBirthMonth(data){
        data.map(user => {
            this.state.userData[user.birthday - 1].push(user);
        });
        // console.log(this.state.userData);
    }

    /**
     * Produces an array of total monthly coupon costs
     * @param  {Array} data  2D array containing user data with `Object {}` type.
     * @return {Array}       Array of total monthly coupon costs based on number of users.
     */
    monthlyCouponCost(data){
        let monthlyCouponCosts = [];
        data.map( month => {
            monthlyCouponCosts.push(month.length * COUPON_COST);
        });
        return monthlyCouponCosts;
    }

    /**
     * Produces an array of cumulative monthly costs.
     * @param  {Array} data  2D array containing user data with `Object {}` type.
     * @return {Array}       Array of cumulative monthly coupon costs based on number of users.
     */
    cumulativeMonthlyCouponCost(data){
        let cumulativeMonthlyCouponCosts = [];
        let cumulativeCost = 0;
        data.map( month => {
            let monthCost = month.length * COUPON_COST;
            cumulativeCost += monthCost;
            cumulativeMonthlyCouponCosts.push(cumulativeCost);
        });
        return cumulativeMonthlyCouponCosts;
    }

    /**
     * Filters 2D array of users based on user.spend.
     * @param  {Integer} minimumSpend   Minimum spend threshold.
     * @param  {Array} userData   2D array containing user data with `Object {}` type.
     * @return {Array} data    Filtered array of users with spends greater than or equal to minimumSpend.
     */
    minimumSpendFilter(minimumSpend, userData){
        if(minimumSpend <= 0) {
            return userData;
        }
        let data = [];
        userData.map( dataSet => {
            let minimumSpendFilter = dataSet.filter((user) => {
                return user.spend >= minimumSpend;
            });
            data.push(minimumSpendFilter);
        });
        return data;
    }

    /**
     * Filters 2D array of users based on user.region.
     * @param  {String} region   Abbreviated State name ("AL" or "CO").
     * @param  {Array} userData   2D array containing user data with `Object {}` type.
     * @return {Array} data    Filtered array of users with a region equal to user defined region.
     */
    regionFilter(region, userData){
        if(!region){
            return userData;
        }
        let data = [];
        userData.map(dataSet => {
            let regionFilter = dataSet.filter((user) => {
                if(user.region == region) {
                    return user;
                }
            });
            data.push(regionFilter);
        });
        console.log(data);
        return data;
    }

    /**
     * Filters 2D array of users based on user.gender.
     * @param  {String} gender   "Male", "Female" or "" values.
     * @param  {Array} userData   2D array containing user data with `Object {}` type.
     * @return {Array} data    Filtered array of users with a gender equal to user defined gender.
     */
    genderFilter(gender, userData) {
        if(!gender){
            return userData;
        }
        let data = [];
        userData.map(dataSet => {
            let genderFilter = dataSet.filter((user) => {
                if(user.gender == gender) {
                    return user;
                }
            });
            data.push(genderFilter);
        });
        return data;
    }

    /**
     * Executes all filter functions independently passing on results of one filter to the next.
     * @return {Array} data    Filtered array of users with all filters applied.
     */
    applyFilters() {
        let minimumSpendFilterResults = this.minimumSpendFilter(this.state.filters.minimumSpend, this.state.userData);
        let regionFilterResults = this.regionFilter(this.state.filters.region, minimumSpendFilterResults);
        let genderFilterResults = this.genderFilter(this.state.filters.gender, regionFilterResults);
        return genderFilterResults;
    }

    minimumSpendOnChange = value => {
        this.setState({
            filters: {
                gender: this.state.filters.gender,
                region: this.state.filters.region,
                minimumSpend: value,
            }
        });
    };

    regionOnChange = value => {
        this.setState({
            filters: {
                gender: this.state.filters.gender,
                region: value,
                minimumSpend: this.state.filters.minimumSpend,
            }
        });
    };

    genderOnChange = value => {
        this.setState({
            filters: {
                gender: value.target.value,
                region: this.state.filters.region,
                minimumSpend: this.state.filters.minimumSpend,
            }
        });
    };

    /**
     * Converts two dimensional array into one.
     * @param  {Array} data   2D array.
     * @return {Array}      1D array.
     */
    oneDimensionalArray(twoDimensionalArray){
        let newArr = [];
        for(let i = 0; i < twoDimensionalArray.length; i++) {
            newArr = newArr.concat(twoDimensionalArray[i]);
        }
        console.log(newArr);
        return newArr;
    }

    render() {
        let data = this.applyFilters();

        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Minimum Spend',
                dataIndex: 'spend',
                key: 'spend',
            },
            {
                title: 'Region',
                dataIndex: 'region',
                key: 'region',
            },
            {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender',
            },
        ];
        return(
            <div>
                <Head/>
                <Nav/>
                <FilterHolder minimumSpendOnChange={this.minimumSpendOnChange}
                              minimumSpend={this.state.filters.minimumSpend}
                              regionOnChange={this.regionOnChange}
                              genderOnChange={this.genderOnChange}
                />
                <Line data={ this.chartData(data) } />
                <Table dataSource={this.oneDimensionalArray(data)} columns={columns} />
            </div>
        );
    }
}

export default Home;

