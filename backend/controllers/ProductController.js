import * as ProductSvc from "../services/ProductSvc.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductSvc.getAllProducts();

    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { _id } = req.params;

    const product = await ProductSvc.getProductById(_id);
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await ProductSvc.addProduct(product);

    return res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateProductById = async (req, res) => {
  try {
    const {_id } = req.params;
    const product = req.body;

    await ProductSvc.updateProductById(_id, product);

    const productUpdate = await ProductSvc.getProductById(_id);

    return res.status(200).json(productUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const {_id} = req.params;

    await ProductSvc.deleteProductById(_id);

    return res.status(200).json({
      Message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
