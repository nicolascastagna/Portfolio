import React, { memo } from "react";
import "./custom_button.scss";

type CustomButtonParams = {
    text: any;
    icon: any;
};

const CustomButton = memo(({ text, icon: Icon }: CustomButtonParams) => (
    <button className="custom-button">
        <div className="overlay"></div>
        <div className="content">
            <span>{text}</span>
            <Icon className="icon" />
        </div>
    </button>
));

export default CustomButton;
