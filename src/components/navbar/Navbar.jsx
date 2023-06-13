import "./index.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      page: "/",
    },
    {
      id: 2,
      name: "About",
      page: "/",
    },
    {
      id: 3,
      name: "Contacts",
      page: "/",
    },
  ];

  return (
    <div className="Navbar">
      <ul className="link-contain">
        {links.map((link) => (
          <li className="Navbar__list--item" key={link.id}>
            <a href={link.page}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
