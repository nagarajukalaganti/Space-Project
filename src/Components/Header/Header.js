import "./Header.css";
import headerImg from "../../Assets/headerImg.jpg";

const Header = ({heading}) => {
    return (
        <section className="header" style={{ backgroundImage: `url(${headerImg})`, backgroundSize: "cover", backgroundPosition: "fixed" }}>
            <h1>{heading}</h1>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ut? Iste necessitatibus minus quod ratione obcaecati recusandae corrupti laboriosam sit.</p>
        </section>
    )
};

export default Header