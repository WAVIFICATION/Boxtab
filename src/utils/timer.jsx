import {
  createContext, useState, useEffect, useContext,
} from 'react';

const TimerContext = createContext();

export default function TimerProvider({ children }) {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTimer(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <TimerContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        timer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  return useContext(TimerContext);
}
