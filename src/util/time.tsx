import { useState, useEffect } from "react";

export default function Age() {
  const BIRTHDAY = new Date("June 23, 2003").getTime();

  const calc = () => {
    const diff = new Date().getTime() - BIRTHDAY;
    return (diff / 1000 / 60 / 60 / 24 / 365).toFixed(9);
  };

  const [age, setAge] = useState(calc());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calc());
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <strong>
      <code  style={{display: "inline" , fontSize: "16px"}} suppressHydrationWarning>{age}</code>
    </strong>
  );
}
