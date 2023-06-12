import { useState, useEffect } from "react";
import axios from "axios";
import "../../scss/AddLink.scss";

const EditLink = ({ id, getLinks }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLink = { link, link_name, description };
    updateLink(updatedLink);
    setDescription("");
    setLink("");
    setLinkName("");
  };

 
  const updateLink = async (updatedLink) => {
    const BASE_URL = `http://127.0.0.1:8000/links/${id}/`;
    try {
      await axios.put(BASE_URL, updatedLink);
    } catch (error) {
      console.log(error);
    }
    getLinks();
   
  };

  console.log(link, link_name, description);

  return (
    <div className="modal" tabIndex="-1" id="edit-link">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Linki Düzenle</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="link" className="form-label">
                  Sosyal Medya Linki
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  placeholder="Sosyal Medya Linkini Giriniz..."
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="link_name" className="form-label">
                  Sosyal Medya Adı
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="link_name"
                  placeholder="Sosyal Medya Adını Giriniz..."
                  value={link_name}
                  onChange={(e) => setLinkName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="desc" className="form-label">
                  Açıklama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  placeholder="Açıklama Giriniz..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="button-close"
                data-bs-dismiss="modal"
              >
                Vazgeç
              </button>
              <button
                type="submit"
                className="button-save"
                data-bs-dismiss="modal"
              >
                Düzenle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditLink;
