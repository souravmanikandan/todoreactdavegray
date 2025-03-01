const Footer = ({ length }) => {
  return (
    <footer className="bg-stone-900 text-center text-white">
      {length} List {length === 1 ? "item" : "items"}
    </footer>
  );
};

export default Footer;
