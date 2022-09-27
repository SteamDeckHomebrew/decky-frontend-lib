import React from 'react';

export const useGlobal = <T extends any>(name: string): T => {
  const [value, setValue] = React.useState<T>(window[name]);

  React.useEffect(() => {
    const handler = () => setValue(window[name]);
    window.addEventListener(name, handler);
    return () => window.removeEventListener(name, handler);
  }, [name]);

  return value;
};
