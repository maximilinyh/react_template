import React from "react";
import "./TeamItem.scss";

const TeamItem = props => {
    return (
        <div className="col-12 col-md-4 mb-4">
            <div
                className="team-list__item decorate-gradient d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${props.bg})` }}
            >
                <div className="team-list__info decorate-gradient__info">
                    Social
                </div>
            </div>
            <div className='team-list__profile'>
                <div className="team-list__name">
                    {props.name}
                </div>
                <div className="team-list__position">
                    {props.position}
                </div>
            </div>
        </div>
    );
};

export default TeamItem;
