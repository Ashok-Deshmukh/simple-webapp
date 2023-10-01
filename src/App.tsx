import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import MessageDisplay from './components/MessageDisplay';
import MessageEdit from './components/MessageEdit';
import './App.css'; // Assuming you have an App.css for global styles

function App() {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <img src="https://via.placeholder.com/150" alt="Corporate Logo" />
                <h1>Corporate WebApp</h1>
            </header>
            
            <main>
                {!user ? (
                    <AuthForm />
                ) : (
                    <>
                        <MessageDisplay message={message} />
                        <MessageEdit onSubmit={newMessage => setMessage(newMessage)} />
                    </>
                )}
            </main>

            <footer className="App-footer">
                <p>&copy; 2023 Corporate WebApp. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;

