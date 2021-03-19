import * as React from "react"
import {useEffect, useState} from "react"
import "./countdown.scss";
// import moment from 'moment';
var moment = require('moment-timezone');
moment().tz("America/New_York").format();
moment.tz.setDefault("America/New_York");

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

const SVGCircle = ({radius}) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            strokeWidth="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

const fetchCountdown = () => {
    // TODO - double check this timer because something is wonky
    const then = moment('2021-03-21T02:01:00');
    const now = moment();
    return moment(then - now);
};

const Countdown = () => {
    const [countDown, setCountdown] = useState(fetchCountdown());

    // Mapping the date values to radius values
    let daysRadius;
    if (countDown.format('D') - 1 > 0) {
        daysRadius = mapNumber(countDown.format('D') - 1, 30, 0, 0, 360);
    } else {
        daysRadius = mapNumber(0.5, 30, 0, 0, 360);
    }

    const hoursRadius = mapNumber(countDown.format('HH'), 24, 0, 0, 360);
    const minutesRadius = mapNumber(countDown.format('mm'), 60, 0, 0, 360);
    const secondsRadius = mapNumber(countDown.format('ss'), 60, 0, 0, 360);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(fetchCountdown());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className={'countdown'}>Pre Sale</div>
            <div className="countdown-wrapper">
                <div className="countdown-item">
                    <SVGCircle radius={daysRadius}/>
                    {countDown.format('D') > 0 ? countDown?.format('D') - 1 : 0}
                    <span>days</span>
                </div>
                <div className="countdown-item">
                    <SVGCircle radius={hoursRadius}/>
                    {countDown?.format('HH')}
                    <span>hours</span>
                </div>
                <div className="countdown-item">
                    <SVGCircle radius={minutesRadius}/>
                    {countDown?.format('mm')}
                    <span>minutes</span>
                </div>
                <div className="countdown-item">
                    <SVGCircle radius={secondsRadius}/>
                    {countDown?.format('ss')}
                    <span>seconds</span>
                </div>
            </div>
        </div>
    )
};

export default Countdown
