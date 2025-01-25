import React, { memo } from "react";
import "./social_link.scss";

type SocialLinkParams = {
    icon: any;
    link: any;
};

const SocialLink = memo(({ icon: Icon, link }: SocialLinkParams) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
    >
        <button className="group relative p-3">
            <div className="gradient-overlay"></div>
            <div className="inner-container">
                <Icon className="icon" />
            </div>
        </button>
    </a>
));

export default SocialLink;
