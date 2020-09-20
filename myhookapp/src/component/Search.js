import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("computer science");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // method 1
    const searchWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    // method 2
    // (async () => {
    //     await axios.get()
    // })();

    // method 3
    // axios.get('...')
    // .then((response) => {
    //     console.log(response.data);
    // });

    if (term && !results.length) {
      searchWiki();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          searchWiki();
        } else {
          setResults([]);
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  // <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;