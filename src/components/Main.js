import React from 'react'

function Main(props) {
  return (
    <main className="travel--card">
      <img
        src={props.data.imageUrl}
        alt="Locations"
        className="travel-img "
      />
      <div className="travel-country">
        <img
          src={`${process.env.PUBLIC_URL}/images/location.png`}
          alt="location logo"
          className="location-img"
        />
        <span className="country-name">{props.data.location}</span>
        <span className="country-link">
          <a href={props.data.googleMapsUrl}>View on Google Maps</a>
        </span>

        <h1 className="travel-title">{props.data.title}</h1>
        <h6 className="travel-date">
          {props.data.startDate} - {props.data.endDate}
        </h6>
        <p className="travel-subtext">{props.data.description}</p>
      </div>
    </main>
  );
}

export default Main