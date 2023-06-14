import { FcNext, FcPrevious } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import AddLink from "./AddLink";
// import EditLink from "./EditLink";

const DataGrid = ({ id, links, getLinks }) => {
  const [editItem, setEditItem] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [link, setLink] = useState("");
  const [link_name, setLinkName] = useState("");
  const [description, setDescription] = useState("");

  
useEffect(() => {
  fetchLink();
}, []);

const fetchLink = async () => {
  const BASE_URL = `http://127.0.0.1:8000/links/${id}/`;
  try {
    const response = await axios.get(BASE_URL);
    const { link, link_name, description } = response.data;
    setLink(link);
    setLinkName(link_name);
    setDescription(description);
  } catch (error) {
    console.log(error);
  }
};



   const deleteLink = async (id) => {
     const BASE_URL = "http://127.0.0.1:8000/links";
     try {
       await axios.delete(`${BASE_URL}/${id}/`);
     } catch (error) {
       console.log(error);
     }
     getLinks();
   };

  useEffect(() => {
    fetchData();
  }, [currentPage, perPage]);


const fetchData = async () => {
  const BASE_URL = "http://127.0.0.1:8000/links";
  try {
    const response = await axios.get(
      `${BASE_URL}?page=${currentPage}&perPage=${perPage}`
    );
    const { items, totalPages } = response.data;
    setData(items);
    setTotalPages(totalPages);
  } catch (error) {
    console.log(error);
  }
};

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePerPageChange = (e) => {
    setPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <div className="header-container">
        <Header links={links} getLinks={getLinks} />
      </div>

      <table className="table table-striped table-hover table-primary mt-3">
        <thead className="thead">
          {/* Table header */}
          <tr className="thead-row">
            {/* <th scope="col">#id</th> */}
            <th scope="col">Sosyal Medya Linki</th>
            <th scope="col">Sosyal Medya Adı</th>
            <th scope="col">Açıklama</th>
            <th scope="col" className="text-center">
              Sil
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Render table rows */}
          {links?.map((item) => {
            const { id, link, link_name, description } = item;
            return (
              <tr key={id}>
                {/* <th>{id}</th> */}
                <td>{link}</td>
                <td>{link_name}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  {/* <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-link"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    onClick={() => fetchLink(id)}
                  /> */}
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger"
                    onClick={() => deleteLink(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <AddLink editItem={editItem} getLinks={getLinks} />
      {/* <EditLink editItem={editItem} getLinks={getLinks}  /> */}
      <div className="pagination">
        <div>
          <span>Show:</span>

          <select
            value={perPage}
            onChange={handlePerPageChange}
            className="row-box"
          >
            <option value={4}>
              4 <span>rows</span>
            </option>
            <option value={10}>
              10 <span>rows</span>
            </option>
            <option value={20}>
              20 <span>rows</span>
            </option>
          </select>
        </div>

        <div>
          <button
            className="previous-button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <span>
              {" "}
              <FcPrevious />{" "}
            </span>
          </button>
          <span>{currentPage}</span> <span>of 4 </span>
          <button
            className="next-button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span>
              {" "}
              <FcNext />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;

