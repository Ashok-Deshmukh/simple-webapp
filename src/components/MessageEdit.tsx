import React, { useState } from 'react';

type Props = {
    onSubmit: (message: string) => void;
}

const MessageEdit: React.FC<Props> = ({ onSubmit }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(message);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Edit your message:
                <textarea value={message} onChange={e => setMessage(e.target.value)} />
            </label>
            <button type="submit">Update</button>
        </form>
    );
}

export default MessageEdit;

