import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { Table } from "react-bootstrap";
const Tables = () => {
  const { data } = useFetch();

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value,key) => (
            <tr>
              <td key={key}>{value.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Tables;
