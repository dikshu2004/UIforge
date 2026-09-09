export default function Navbar(props) {
    return (
        <nav className="navbar">

            <h2>{props.brand}</h2>

           <div className="nav-link">
    {props.links.map((item) => (
    <a key={item.text} href={item.link}>{item.text}</a>
    ))}
</div>

      

</nav>)}