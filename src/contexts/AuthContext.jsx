import { createContext, useContext, useState, ReactNode } from 'react';







const AuthContext = createContext(undefined);

const dummyUsers = [
  { id: '1', name: 'John Buyer', email: 'buyer@test.com', password: '123456', role: 'Buyer' },
  { id: '2', name: 'Sarah Agent', email: 'agent@test.com', password: '123456', role: 'Agent' },
  { id: '3', name: 'Mike Owner', email: 'owner@test.com', password: '123456', role: 'Owner' },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(dummyUsers);

  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    }
    return false;
  };

  const register = (name, email, password, role) => {
    const exists = users.find(u => u.email === email);
    if (exists) return false;

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role,
    };
    setUsers([...users, newUser]);
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
