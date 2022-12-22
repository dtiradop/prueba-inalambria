/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Table = ({ table = [] }) => {
  return (
    <div className="row">
      <div className="col table-responsive">
        <table className="table align-middle text-center">
          <thead className="align-middle">
            <tr>
              <th scope="col" className="align-middle">País</th>
              <th scope="col" className="align-middle">Nombre</th>
              <th scope="col" className="align-middle">Latitud</th>
              <th scope="col" className="align-middle">Longitud</th>
              <th scope="col" className="align-middle">Poblacion</th>
              <th scope="col" className="align-middle" colSpan={2}>Ver más</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, i) => (
              <tr className="align-middle">
                <td width={200}>
                  <img className="img-banderas"
                    src={
                      item.country_code === "US"
                        ? "https://cdn-icons-png.flaticon.com/512/323/323310.png"
                        : item.country_code === "CO"
                        ? "https://cdn-icons-png.flaticon.com/512/197/197575.png"
                        : item.country_code === "JM"
                        ? "https://cdn-icons-png.flaticon.com/512/197/197611.png"
                        : "https://cdn-icons-png.flaticon.com/512/197/197374.png"
                    }/>
                </td>
                <td>{item.name}</td>
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>{item.population}</td>
                <td colSpan={2}>
                  <OverlayTrigger
                    trigger="click"
                    key="right"
                    placement="right"
                    overlay={
                      <Popover id={`popover-positioned-right`}>
                        <Popover.Header as="h3">{item.name} - {item.country_code}  </Popover.Header>
                        <Popover.Body>
                          Admin 1: {item.admin1} <br></br>
                          Admin 2: {item.admin2}<br></br>
                          Admin 3: {item.admin3}<br></br>
                          Admin 4: {item.admin4}<br></br>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="btn btn-sm o-btn">Ver más</Button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
