
type Props = {
    image: string;
};


export default function ComponenteImmagine(props: Props) {


    return (
        <>

            <img src={props.image} alt="Immagine del personaggio" />
        </>
    );
}
