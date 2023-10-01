// components/AuthForm.tsx

import React, { useState } from 'react';

type Props = {
  isLogin: boolean;
  onSubmit: (email: string, password: string) => void;
};

const AuthForm: React.FC<Props> = ({ isLogin, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={() => onSubmit(email, password)}>
        {isLogin ? 'Login' : 'Register'}
      </button>
    </div>
  );
};

export default AuthForm;

