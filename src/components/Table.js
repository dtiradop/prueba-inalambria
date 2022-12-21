import React from "react";
import { Popover } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Table = ({ table = [] }) => {
  return (
    <div className="row">
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">País</th>
              <th scope="col">Nombre</th>
              <th scope="col">Latitud</th>
              <th scope="col">Longitud</th>
              <th scope="col">Population</th>
              <th scope="col">Ver más</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, i) => (
              <tr>
                <td width={200}>
                  <img
                    src={
                      item.country_code === "US"
                        ? "https://cdn-icons-png.flaticon.com/512/323/323310.png"
                        : item.country_code === "CO"
                        ? "https://www.kindpng.com/picc/m/501-5015876_cono-con-bandera-de-colombia-bandera-colombia-circulo.png"
                        : item.country_code === "JM"
                        ? "https://w7.pngwing.com/pngs/58/102/png-transparent-flag-of-jamaica-flag-miscellaneous-flag-logo.png"
                        : "https://www.pnguniverse.com/wp-content/uploads/2020/09/Bandera-circular-de-Reino-Unido.png"
                    }
                    width="20%"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>{item.population}</td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    key="right"
                    placement="right"
                    overlay={
                      <Popover id={`popover-positioned-right`}>
                        <Popover.Header as="h3">{item.name}</Popover.Header>
                        <Popover.Body>
                          Admin 1: {item.admin1} <br></br>
                          Admin 2: {item.admin2}<br></br>
                          Admin 3: {item.admin3}<br></br>
                          Admin 4: {item.admin4}<br></br>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="btn btn-danger">Ver más</Button>
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
