import React from 'react';
const GetMovie = (props) => {
    return props.data.map(data => (
        <div key={data.imdbID}>
          <h2>{data.Title}</h2>
          <hr />
        </div>
      ));
}
 
export default GetMovie;