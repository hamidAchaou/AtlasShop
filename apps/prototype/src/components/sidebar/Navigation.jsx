import NavItem from "./NavItem";

const Navigation = () => {
  const navItems = [
    { icon: "🏠", label: "Home", path: "/" },
    { icon: "🔍", label: "Explore", path: "/explore" },
    { icon: "✉️", label: "Messages", path: "/messages" },
    { icon: "🔔", label: "Notifications", path: "/notifications" },
    { icon: "👤", label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="navigation">
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default Navigation;
