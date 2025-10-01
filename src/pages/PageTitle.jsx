import PropTypes from "prop-types";

function PageTitle({ name = "Enter", home = "Home", link = "/" }) {
  return (
    <div className="page-title light-background">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">{name}</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><a href={link}>{home}</a></li>
            <li><a>{name}</a></li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

PageTitle.propTypes = {
  home: PropTypes.string,
  name: PropTypes.string,
};

export default PageTitle;
