import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import "../Styles/Table.css";
import { Table, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
const Tables = () => {
  const { data } = useFetch();
  const [pageNumber, setPageNumber] = useState(0);
  const catsPerPage = 10;
  const pagesVisited = pageNumber * catsPerPage;
  const pageCount = Math.ceil(data.length / catsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="table">
        <h1>Cats of the Word</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Temperament</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice(pagesVisited, pagesVisited + catsPerPage)
              .map((value, key) => (
                <tr>
                  <td key={key}>{value.name}</td>
                  <td>{value.temperament}</td>
                  <td>
                    <Button variant="outline-primary">Photo</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <div className="paginationButtons">
          <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel={"Siguiente"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBtns"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisable"}
          />
        </div>
      </div>
    </>
  );
};

export default Tables;
