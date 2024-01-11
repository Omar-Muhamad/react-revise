import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ChildComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);

  const isEven = useMemo(() => {
    // time consuming operation (data fetching)
    let i = 0;
    while (i < 500000000) i++;

    return age % 2 === 0;
  },[age])

  return (
    <div className="">
      <Title />
      <Count text="Age" count={age} />
      <div>
        <Button handleClick={incrementAge}>Increment age</Button>
        <span>{isEven ? "  Even" : "  Odd"}</span>
      </div>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  );
};

export default ChildComponent;
