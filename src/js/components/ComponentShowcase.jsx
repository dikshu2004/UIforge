import Button from "./Button";
import Alert from "./Alert";
import Badge from "./Badge";
import Card from "./Card";
import Navbar from "./navbar";
const navLinks = [
    { text: "Home", link: "#" },
    { text: "Components", link: "#" },
    { text: "About", link: "#" },
    { text: "Contact", link: "#" }
];

export default function ComponentShowcase() {
  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2>Buttons</h2>
        <div className="d-flex flex-wrap gap-2 mb-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="black">Black</Button>
        </div>
      </div>
      
      <Card />
      <Navbar brand="UIForge" links ={navLinks} />
      <Alert>Your profile was updated successfully!</Alert>
      <Alert variant="primary">a simple primary alert</Alert>
      <Alert variant="success">a simple success alert</Alert>
      <Alert variant="danger">a simple danger alert</Alert>
      <Alert variant="warning">a simple warning alert</Alert>
      <Badge>New</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="white">White</Badge>
      <Badge variant="black">Black</Badge>
    </div>
    
  );
}
