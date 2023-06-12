
import "../../scss/Header.scss";
import SearchBox from "./SearchBox";


const Header = ({ getLinks }) => {
  
  const handleSearch = (searchTerm) => {
    // Perform search logic using the searchTerm
    console.log("Searching for:", searchTerm);
  };



  


  return (
    <div className="header">
      <div className="left-group d-inline-flex">
        <div className="my-2 my-sm-0">
          <SearchBox onSearch={handleSearch} getLinks={getLinks} />
        </div>
      </div>

      <div className="right-group">
                    
            <button
              type="button"
              className="header-button"
              data-bs-toggle="modal"
              data-bs-target="#add-link"
              
            >
              + Yeni Hesap Ekle
            </button>
       
      </div>
     </div>
  );
};

export default Header;
