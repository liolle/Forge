import React from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";
// import Link from "next/link";

const SignIn: NextPage = async () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-neutral-500 bg-cover ">
            SIGN IN
        </div>
    );
};

SignIn.propTypes = {
    providers: PropTypes.object.isRequired
};

export default SignIn;
