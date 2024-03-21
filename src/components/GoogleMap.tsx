const GoogleMap = ({ city }: { city: string }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="300"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${
          import.meta.env.VITE_GOOGLE_MAP_API_KEY
        }&q=${city}`}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
