import React from 'react';
import PropTypes from 'prop-types';

type CardProps = {
    children: any;
    reverse: boolean;
};

export default function Card({ children, reverse }: CardProps) {
    return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

Card.defaultProps = {
    reverse: true,
};

Card.protoTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
};
