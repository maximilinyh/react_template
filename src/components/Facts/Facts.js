import React, { useState } from "react";
import "./Facts.scss";
import FactsItem from "./FactsItem";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Facts = () => {
  const factsItems = [
    {
      id: 1,
      title: 0,
      text: "Web Design Projects",
      currentValue: 212
    },
    {
      id: 2,
      title: 0,
      text: "happy client",
      currentValue: 123
    },
    {
      id: 3,
      title: 0,
      text: "award winner",
      currentValue: 46
    },
    {
      id: 4,
      title: 0,
      text: "cup of coffee",
      currentValue: 23
    },
    {
      id: 5,
      title: 0,
      text: "members",
      currentValue: 67
    }
  ];

  const [viewPortEntered, setViewPortEntered] = useState(false);

  const factsItem = factsItems.map(item => {
    let startValueTitle = item.title;
    let endValueTitle = item.currentValue;
    return (
      <CountUp
        key={item.id}
        start={viewPortEntered ? null : startValueTitle}
        end={endValueTitle}
        delay={0.2}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(!viewPortEntered);
              }
            }}
            delayedCall
          >
            <FactsItem refer={countUpRef} title={item.title} text={item.text} />
          </VisibilitySensor>
        )}
      </CountUp>
    );
  });

  return (
    <div className="Facts">
      <Container>
        <div className="facts-list row no-gutters justify-content-center justify-content-md-start">
          {factsItem}
        </div>
      </Container>
    </div>
  );
};

export default Facts;
