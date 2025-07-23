import { useState } from "react";


function shortenUrl(longUrl) {
    
    const hash = btoa(longUrl).slice(0, 6);
    return `https://shortUrlConverter/${hash}`;
}
const Url = () => {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  setShort(shortenUrl(url));
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={handleChange}
        />
        <button type="submit">
          Submit
        </button>
        {short && <p>Shortened URL: {short}</p>}
      </form>
    </div>
  );
};

export default Url;
