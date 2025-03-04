"use client";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Counter = ({ end = 100, decimals = 0 }) => (
  <CountUp end={end} duration={3} decimals={decimals}>
    {({ countUpRef, start }) => (
      <ReactVisibilitySensor onChange={start} delayedCall>
        <span className="count" data-from="0" data-to={end} ref={countUpRef}>
          0
        </span>
      </ReactVisibilitySensor>
    )}
  </CountUp>
);

export default Counter;
