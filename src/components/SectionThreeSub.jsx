export default function SectionThreeSub(props) {
  return (
    <div className="section-3-detail">
      <div className="section-3-image">
        <img src={props.image} alt="workflow" />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </div>
  );
}
