import "./MaskedText.css";

const MaskedText = ({ imageSrc }) => {
  
    return (
    <div className="masked-text-wrapper">
      <h1
        className="masked-text masked-text-big"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        DLS
      </h1>
      <h2
        className="masked-text masked-text-small"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        studios
      </h2>
    </div>
  );
};

export default MaskedText;
