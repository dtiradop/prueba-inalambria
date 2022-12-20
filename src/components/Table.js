import React from "react";

const Table = ({ table = [] }) => {
  return (
    <div>
      {table.map((item, index) => (
        <div key={index} className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">País</th>
                <th scope="col">Nombre</th>
                <th scope="col">Latitud</th>
                <th scope="col">Longitud</th>
                <th scope="col">Postcode</th>
              </tr>
            </thead>
            <tbody>
                {  table.map((item, i) => (
              <tr>
                <td>{item.country_code}</td>
                <td>{item.name}</td>
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>{item.postcodes}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Table;
