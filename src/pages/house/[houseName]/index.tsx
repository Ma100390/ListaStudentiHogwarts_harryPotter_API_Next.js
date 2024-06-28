import { useEffect, useState } from "react";
import axios from "axios";
import ComponenteInfo from "../../../componets/ComponenteInfo";
import { useRouter } from "next/router";

export default function House() {
  const router = useRouter();
  const { houseName } = router.query; 

  const [houseData, setHouseData] = useState([]);

  useEffect(() => {
    if (houseName) {
      console.log("Fetching data for house:", houseName);
      axios
        .get(`https://hp-api.onrender.com/api/characters/house/${houseName}`)
        .then((response) => {
          console.log("API response:", response.data);
          setHouseData(response.data);
        })
        .catch((error) => {
          console.log("API error:", error);
        });
    }
  }, [houseName]);

  return (
    <>
      <h1>Studenti di {houseName}</h1>
      <ul>
        {houseData.map((student) => (
          <li>
            <ComponenteInfo student={student} />
          </li>
        ))}
      </ul>
    </>
  );
}
