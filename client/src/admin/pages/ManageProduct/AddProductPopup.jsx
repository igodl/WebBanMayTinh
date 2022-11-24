import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";
import Popup from "../../components/Popup/Popup";

const AddProductPopup = ({
  showPopup,
  handleClosePopup,
  brands,
  categories,
}) => {
  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleClose = useCallback(
    (value) => {
      handleClosePopup(value);
    },
    [handleClosePopup]
  );

  const handleCreateProduct = useCallback(async () => {
    const product = {
      Name: name,
      BrandId: brandId,
      CategoryId: categoryId,
      Price: price,
      Image: image,
      Description: description,
      Status: status,
    };

    await axios
      .post("http://localhost:5000/products/addProduct", product)
      .then((res) => res.json())
      .catch((error) => error);

    console.log(product);

    handleClosePopup(false);
  }, [
    name,
    brandId,
    categoryId,
    price,
    image,
    description,
    status,
    handleClosePopup,
  ]);

  return (
    <>
      <Popup
        showPopup={showPopup}
        name="Add Product"
        handleClosePopup={(e) => handleClose(e)}
        minWidth="800px"
        modelBody={
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Brand</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setBrandId(e.target.value)}
              >
                {(brands || []).map((brand) => (
                  <option value={brand?._id}>{brand?.Name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Category</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {(categories || []).map((category) => (
                  <option value={category?._id}>{category?.Name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Price</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Image</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Status</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Trading">Trading</option>
                <option value="Stop trading">Stop trading</option>
                <option value="Sold out">Sold out</option>
              </select>
            </div>
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">
                Example multiple select
              </label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}
          </form>
        }
        modelFooter={
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCreateProduct}
            >
              Create
            </button>
          </>
        }
      />
    </>
  );
};

export default AddProductPopup;
