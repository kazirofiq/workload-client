import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from './CustomerReview/CustomerReview';
import HrBusiness from './HrBusiness/HrBusiness';
import Success from './Success/Success';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HrBusiness></HrBusiness>
            <CustomerReview></CustomerReview>
            <Success></Success>
        </div>
    );
};

export default Home;