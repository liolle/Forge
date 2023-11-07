"use client";
import { Button } from "../ui/button";
import React, { ReactNode, useEffect, useState } from "react";

type PropType = {
    children?: ReactNode;
};

const CButton = ({ children }: PropType) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        setDisplayText(`${new Date().toLocaleTimeString()}`);
    });

    const handleClick = () => {
        setDisplayText(`${new Date().toLocaleTimeString()}`);
    };

    return (
        <div className=" flex flex-col items-center justify-center gap-1">
            <div>{displayText}</div>
            <Button onClick={handleClick}>{children}</Button>
        </div>
    );
};

export default CButton;
