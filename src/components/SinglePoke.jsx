import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function SinglePoke(props) {
  return (
    <Card className="w-25">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="text-uppercase text-center mb-4">
          {props.title}
        </Card.Title>
        <Card.Text>
          <h6 className="text-center">Moves</h6>
          <ul>
            {props.moves.slice(0, 5).map((m) => (
              <li key={m.move.name}>{m.move.name}</li>
            ))}
          </ul>
          <p>{props.stats}</p>

          <a href="#">{props.location}</a>
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Card>
  );
}
