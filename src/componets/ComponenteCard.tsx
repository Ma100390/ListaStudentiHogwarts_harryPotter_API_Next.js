import { Student } from "@/types/Student";
import Info from "./ComponenteInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import placeholder from "../../public/Placeholder.jpg";
import Image from "next/image";

type Props = {
  student: Student;

}

export default function ComponenteCard(props: Props) {
  // Aggiungi un console.log per verificare i valori delle props o variabili


  return (
    <div className="card">
      {props.student.image ? (
        <img src={props.student.image} alt={props.student.name} className="card-image" />
      ) : (
        <Image src={placeholder} alt="Immagine predefinita" className="card-image"  width={300} height={200}/>
      )}
      <div className="card-body">
        <h5 className="card-title">{props.student.name}</h5>
        <p className="card-text">House: {props.student.house}</p>
        <p className="card-text">Wizard: {props.student.wizard ? "Yes" : "No"}</p>
        <button className="btn-light">
          <Link href={`/students/${props.student.id}`}>Visualizza Dettagli</Link>
        </button>
      </div>
    </div>
  );
}



