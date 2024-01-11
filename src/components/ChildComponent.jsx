import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ChildComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  },[age])

  const incrementSalary = useCallback( () => {
      setSalary((prev) => prev + 1000)
  }, [salary])

  return (
    <div className="">
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  );
};

export default ChildComponent;
