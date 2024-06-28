import React, { useState } from "react";
import { StudentInfo } from "@/types/StudentInfo";
import Card from "./ComponenteCard";
type Props = {
  student: StudentInfo;
};
export default function ComponenteInfo(props: Props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <h2 onClick={toggleDetails}>{props.student.name}</h2>
      {showDetails && <Card student={props.student} />}
    </div>
  );
}