export default function JournalEntry(props) {
  return (
    <section className={`JournalEntry flex-row ${props.hr ? "short-hr" : ""}`}>
      <img
        className="JournalEntry--destination-image"
        src={require(`../images/${props.entry.img}`)}
      />
      <div className="JournalEntry--everything-but-destination-image flex-column">
        <div className="flex-row">
          <div className="flex-row align-items-center">
            <img
              className="JournalEntry--location-pin"
              src={require("../images/location-pin.png")}
            />
            <h6 className="JournalEntry--country">{props.entry.country}</h6>
          </div>
          <a
            className="JournalEntry--link-color"
            href={props.entry.googleMapsLink}
          >
            View on Google Maps
          </a>
        </div>

        <h1 className="JournalEntry--huge-h1">{props.entry.destination}</h1>

        <div className="JournalEntry--dates">
          <time>{props.entry.startDate}</time>
          <span>-</span>
          {props.entry.endDate}
        </div>

        <p>{props.entry.articlePreview}</p>
      </div>
    </section>
  );
}
