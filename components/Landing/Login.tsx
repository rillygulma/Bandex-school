import { useState } from 'react';
import { Shield } from 'lucide-react';
import {
  PageContainer,
  Card,
  IconContainer,
  Title,
  Label,
  Input,
  TogglePassword,
  Button,
} from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login clicked');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <PageContainer>
      <Card>
        <IconContainer>
          <Shield size={32} style={{ color: '#3b82f6' }} />
        </IconContainer>
        <Title>Login</Title>
        <form>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
              <TogglePassword type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide' : 'Show'} Password
              </TogglePassword>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Button type="button" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </PageContainer>
  );
};

export default Login;
