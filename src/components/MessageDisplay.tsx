import React from 'react';

type Props = {
    message: string;
}

const MessageDisplay: React.FC<Props> = ({ message }) => {
    return (
        <div>
            <h2>Your Message:</h2>
            <p>{message || "No message set."}</p>
        </div>
    );
}

export default MessageDisplay;

