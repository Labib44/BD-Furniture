import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";

const AddProducttttttt = () => {
    const [categories, setcategories] = useState([]);
  const [subCategory, setSubcategory] = useState([]);
  const [units, setunits] = useState([]);
  const [brands, setbrands] = useState([]);
  const [variations, setVariations] = useState([{}]);
  const [variationData, setVariationData] = useState([{}]);
  const [variationValues, setVariationValues] = useState([]);
  const [count, setCount] = useState(1);

//   let userD = JSON.parse(localStorage.getItem("userData"));
//   let token = userD.token;

  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const [valueFields, setValueFields] = useState([]);

  const handleVariationChange = (selectedValues) => {
    const newFields = [];

    if (selectedValues && selectedValues.length > 0) {
      selectedValues.forEach((value, index) => {
        newFields[index] = value.value;
      });

      setValueFields(newFields);
    } else {
      setValueFields([]);
    }
  };

  // const handleRemoveVariation = (index) => {
  //   const updatedVariations = [...variations];
  //   updatedVariations.splice(index, 1);
  //   setVariations(updatedVariations);
  // };

  const handleInputChange = (index, field, value) => {
    const updatedVariations = [...variations];
    updatedVariations[index][field] = value;
    setVariations(updatedVariations);
  };

  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  // Function to handle the change in the dropdown
  const handleSelectChange = (event) => {
    setSelectedOption(event.value);
  };

  const [isStockAvailable, setIsStockAvailable] = useState(false);
  const [stockInformation, setStockInformation] = useState("");

  const handleCheckboxChange = () => {
    setIsStockAvailable(!isStockAvailable);
  };

  const handleAdding = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sku = form.sku.value;
    const product_type = form.product_type.value;
    const category_id = form.category_id.value;
    const sub_category_id = form.sub_category_id.value;
    const brand_id = form.brand_id.value;
    const unit_id = form.unit_id.value;
    const tax_type = form.tax_type.value;
    const tax = form.tax.value;
    const enable_stock = form.enable_stock.value;
    const weight = form.weight.value;
    const status =form.formData.status;
    const dpp_inc_tax = form.dpp_inc_tax.value;
    const profit_percent = form.profit_percent.value;
    const sub_unit_ids = form.sub_unit_ids.value;
    const default_purchase_price = form.default_purchase_price.value;
    const default_sell_price = form.default_sell_price.value;
    const sell_price_inc_tax = form.sell_price_inc_tax.value;
    const variation_template_id = form.variation_template_id.value;
    const variation_value_id = form.variation_value_id.value;
    const images = form.images.value;
    const not_for_selling = form.not_for_selling.value;
    const expiry_period = form.expiry_period.value;
    const alert_quantity = form.alert_quantity.value;

    const data = {
      name: name,
      detail: value,
      sku: sku,
      image: image,
      product_type,
      category_id: category_id,
      brand_id: brand_id,
      sub_category_id: sub_category_id,
      unit_id: unit_id,
      enable_stock: enable_stock,
      tax_type: tax_type,
      weight: weight,
      status: status,
      dpp_inc_tax: dpp_inc_tax,
      profit_percent: profit_percent,
      sub_unit_ids: sub_unit_ids,
      default_purchase_price: default_purchase_price,
      default_sell_price: default_sell_price,
      sell_price_inc_tax: sell_price_inc_tax,
      variation_template_id: variation_template_id,
      variation_value_id: variation_value_id,
      images: images,
      stock_ammount: stock_ammount,
      not_for_selling: not_for_selling,
      tax: tax,
      expiry_period: expiry_period,
      alert_quantity: alert_quantity,
    };

    try {
      // Use Axios to make a POST request to your API
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/products`,
        data,
        {
          headers: {
            Authorization: `Bearer `,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success(`${response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
        });

        form.reset();
      } else {
        toast.error(response.data?.error, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      setError(error?.response?.data?.errors);
    }
  };

  // get category data
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/categories`, {
        headers: {
          Authorization: `Bearer`,
        },
      })
      .then((response) => {
        setcategories(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, []);

  const categorySelect = (event) => {
    const selectedCategoryId = event?.id;

    const subcategory = categories?.filter(
      (category) => category?.id == selectedCategoryId
    );

    setSubcategory(subcategory[0]?.children);
  };

  // get variation data
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/variation-templates`, {
        headers: {
          Authorization: `Bearer`,
        },
      })
      .then((response) => {
        setVariationData(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching branch:", error);
      });
  }, []);

  const variantSelect = (event, id) => {
    console.log("event", event);
    console.log("index", id);
    const selectedVariantId = event?.id;
    const selectedVariant = variationData?.find(
      (variant) => variant?.id == selectedVariantId
    );
    setVariationValues(selectedVariant?.values);
  };

  // get unit data
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/units`, {
        headers: {
          Authorization: `Bearer`,
        },
      })
      .then((response) => {
        setunits(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching branch:", error);
      });
  }, []);

  // get Brand data
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/brands`, {
        headers: {
          Authorization: `Bearer `,
        },
      })
      .then((response) => {
        setbrands(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching branch:", error);
      });
  }, []);

  const increaseVariationTemplate = () => {
    setCount(count + 1);
  };

  const removeVariationTemplate = (id) => {
    const div = document.getElementById(id);
    if (div) {
      div.remove();
    }
  };
    return (
        <div
        className="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
        data-open="click"
        data-menu="vertical-menu-modern"
        data-col=""
      >
        <div className="app-content content ">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-9 col-12 mb-2">
                <div className="row breadcrumbs-top">
                  <div className="col-12 d-flex justify-content-center align-items-center mt-1 d-md-block">
                    <h2 className="content-header-title float-start">
                      Add New Product
                    </h2>
                    <div className="breadcrumb-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body">
              <section id="multiple-column-form">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        {/* back button */}
                        <div className="content-header-right text-end col-12 ">
                          <div className="mb-1 pb-1 border-bottom d-flex align-items-center justify-content-between">
                            <h4 className="card-title">Add Product</h4>
                            <Link
                              to="/product/product-list"
                              className="btn-icon btn btn-primary btn-round btn-sm "
                              type="button"
                            >
                              Back To List <FaArrowRight></FaArrowRight>
                            </Link>
                          </div>
                        </div>
                        <form className="form" onSubmit={handleAdding}>
                          <div className="row">
                            <div className="col-md-4  mt-1  col-12">
                              <div className="mb-1">
                                <label
                                  className="form-label"
                                  htmlFor="first-name-column"
                                >
                                  Product Name
                                </label>
                                <input
                                  type="text"
                                  id="product-name"
                                  className="form-control"
                                  placeholder="Product Name"
                                  name="name"
                                />
                              </div>
                            </div>
                            <div className="col-md-4  mt-1  col-12">
                              <div className="mb-1">
                                <label className="form-label" htmlFor="sku">
                                  Sku
                                </label>
                                <input
                                  type="text"
                                  id="sku"
                                  className="form-control"
                                  placeholder="Sku"
                                  name="sku"
                                />
                              </div>
                            </div>

                            <div className="col-md-4  mt-1  col-12">
                              <div className="mb-1">
                                <label
                                  className="form-label"
                                  htmlFor="first-name-column"
                                >
                                  Product Category
                                </label>
                                <Select
                                  className=""
                                  id="category_id"
                                  name="category_id"
                                  aria-label="Select a category"
                                  onChange={categorySelect}
                                  options={categories}
                                  getOptionLabel={(x) => x?.name}
                                  getOptionValue={(x) => x?.id}
                                ></Select>
                              </div>
                            </div>
                            <div className="col-md-4  mt-1  col-12">
                              <div className="mb-1">
                                <label
                                  className="form-label"
                                  htmlFor="first-name-column"
                                >
                                  Sub-Category
                                </label>

                                <Select
                                  className=""
                                  id="sub_category_id"
                                  name="sub_category_id"
                                  aria-label="Select a Sub-category"
                                  options={subCategory}
                                  getOptionLabel={(x) => x?.name}
                                  getOptionValue={(x) => x?.id}
                                ></Select>
                              </div>
                            </div>

                            <div className=" col-md-4  mt-1  col-12">
                              <div>
                                <label
                                  className="form-label"
                                  htmlFor="first-name-column"
                                >
                                  Brand
                                </label>

                                <Select
                                  className=""
                                  id="brand_id"
                                  name="brand_id"
                                  aria-label="Select a brand"
                                  options={brands}
                                  getOptionLabel={(x) => x?.name}
                                  getOptionValue={(x) => x?.id}
                                ></Select>
                                <span className="text-danger">
                                  {Error?.brand}
                                </span>
                              </div>
                            </div>

                            <div className=" col-md-4  mt-1  col-12">
                              <div>
                                <label
                                  className="form-label"
                                  htmlFor="first-name-column"
                                >
                                  Unit
                                </label>

                                <Select
                                  className=""
                                  id="unit_id"
                                  name="unit_id"
                                  aria-label="Select a division"
                                  options={units}
                                  getOptionLabel={(x) => x?.name}
                                  getOptionValue={(x) => x?.id}
                                ></Select>
                                <span className="text-danger">
                                  {Error?.unit}
                                </span>
                              </div>
                            </div>

                            <div className="form-check form-check-inline ms-md-3 my-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox10"
                                name="enable_stock"
                                value="unchecked"
                                onChange={handleCheckboxChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineCheckbox10"
                              >
                                Manage Stock?
                              </label>
                            </div>

                            {isStockAvailable && (
                              <div className="row">
                                <div className="mt-1 mb-3 col-md-4">
                                  <div className="form-label">
                                    Alert Quantity
                                  </div>
                                  <input
                                    type="text"
                                    name="alert_quantity"
                                    className=" form-control"
                                    placeholder="Enter Quantity"
                                    value={stockInformation}
                                    onChange={(e) =>
                                      setStockInformation(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            )}

                            <div className=" col-12 mb-2">
                              <label
                                className="form-label"
                                htmlFor="country-floating"
                              >
                                Details
                              </label>
                              <Editor
                                apiKey="crk7q7xgrqiqpyj92lvkjc68wgxhs4427g8islzqa968i8sd"
                                onEditorChange={(newValue, editor) => {
                                  setValue(newValue);
                                  setText(
                                    editor.getContent({ format: "text" })
                                  );
                                }}
                                onInit={(evt, editor) =>
                                  setText(editor.getContent({ format: "text" }))
                                }
                                name="detail"
                                initialValue=" "
                                value={value}
                                init={{
                                  height: 250,
                                  // menubar: false,
                                  plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen",
                                    "insertdatetime media table paste code help wordcount",
                                  ],
                                  toolbar:
                                    "undo redo | formatselect | " +
                                    "bold italic backcolor | alignleft aligncenter " +
                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                    "removeformat | help",
                                  content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                }}
                              />
                            </div>

                            <div className="d-flex">
                              <div className="form-check form-check-inline ms-md-4 my-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox9"
                                  value="unchecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox9"
                                >
                                  Enable Product description, IMEI or Serial
                                  Number
                                </label>
                              </div>
                              <div className="form-check form-check-inline ms-md-5 my-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="not_for_selling"
                                  id="inlineCheckbox9"
                                  value="unchecked"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox9"
                                >
                                  Not for selling
                                </label>
                              </div>
                            </div>

                            <div className="col-md-4  mt-1  col-12">
                              <div className="mb-1">
                                <label
                                  className="form-label"
                                  htmlFor="category"
                                >
                                  Weight
                                </label>
                                <input
                                  type="text"
                                  id="category"
                                  className="form-control"
                                  name="weight"
                                  placeholder="Weight"
                                />
                              </div>
                            </div>

                            <div className="col-md-4  mt-1  col-12">
                              <div className="mb-1">
                                <label
                                  className="form-label"
                                  htmlFor="category"
                                >
                                  Service staff timer/Preparation time (In
                                  minutes)
                                </label>
                                <input
                                  type="text"
                                  id="category"
                                  className="form-control"
                                  name="category"
                                  placeholder=" Service staff timer/Preparation time (In minutes)"
                                />
                              </div>
                            </div>

                            <div className="col-md-4  mt-1  col-12">
                              <div className="mb-1">
                                <label className="form-label">
                                  Applicable tax
                                </label>

                                <Select
                                  id="tax"
                                  name="tax"
                                  className=""
                                  options={[
                                    { value: "None", label: "None" },
                                    { value: "Vat@10%", label: "Vat@10%" },
                                    { value: "CGST@8%", label: "CGST@8%" },
                                    { value: "SGST@5%", label: "SGST@5%" },
                                    { value: "GST@15%", label: "GST@15%" },
                                  ]}
                                ></Select>

                                <span className="text-danger">
                                  {Error?.marital_status}
                                </span>
                              </div>
                            </div>

                            <div className="col-md-4  mt-1  col-12">
                              <div className="mb-1">
                                <label className="form-label">
                                  Selling Product tax Type
                                </label>

                                <Select
                                  id="tax-type"
                                  name="tax_type"
                                  className=" "
                                  options={[
                                    { value: "inclusive", label: "Inclusive" },
                                    { value: "exclusive", label: "Exclusive" },
                                  ]}
                                ></Select>

                                <span className="text-danger">
                                  {Error?.tax_type}
                                </span>
                              </div>
                            </div>

                            <hr className="my-2" />
                            <div className=" col-12 my-1">
                              <div className="row">
                                <div className="mb-1 col-md-4  mt-1 ">
                                  <label className="form-label">
                                    <h4>Product Type: </h4>
                                  </label>

                                  <Select
                                    id="variable"
                                    name="product_type"
                                    onChange={handleSelectChange}
                                    options={[
                                      { value: "Single", label: "Single" },
                                      {
                                        value: "Variation",
                                        label: "Variation",
                                      },
                                    ]}
                                  ></Select>

                                  <span className="text-danger">
                                    {Error?.variable}
                                  </span>
                                </div>
                              </div>

                              {selectedOption === "Single" && (
                                <div className="mb-1">
                                  <div className="bg text-black row py-1">
                                    <div className="my-1">
                                      <h5>For Single Product</h5>
                                    </div>
                                    <div className="col-md-2">
                                      <div className="col-12">
                                        <div className="mb-1">
                                          <label
                                            className="form-label"
                                            htmlFor="first-name-column"
                                          >
                                            Default Purchase Price exc. Tax.
                                          </label>
                                          <input
                                            type="text"
                                            id="name"
                                            name="default_purchase_price"
                                            className="form-control form-variation"
                                            placeholder="default_purchase_price"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-md-2">
                                      <div className="col-12">
                                        <div className="mb-1">
                                          <label
                                            className="form-label"
                                            htmlFor="first-name-column"
                                          >
                                            Purchase Price Inc. Tax.
                                          </label>
                                          <input
                                            type="text"
                                            id="name"
                                            name="dpp_inc_tax"
                                            className="form-control form-variation"
                                            placeholder="dpp_inc_tax"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div className="col-12">
                                        <div className="mb-1">
                                          <div className="form-label  ">
                                            Profit Percent(%)
                                          </div>
                                          <input
                                            type="text"
                                            id="name"
                                            name="profit_percent"
                                            placeholder="profit_percent"
                                            className="form-control form-variation"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-md-2">
                                      <div className="col-12">
                                        <div className="mb-1">
                                          <label
                                            className="form-label"
                                            htmlFor="first-name-column"
                                          >
                                            Default Selling price exc. Tax.
                                          </label>
                                          <input
                                            type="text"
                                            id="name"
                                            name="default_sell_price"
                                            className="form-control form-variation"
                                            placeholder="default_sell_price"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div className="col-12">
                                        <div className="mb-1">
                                          <label
                                            className="form-label"
                                            htmlFor="first-name-column"
                                          >
                                            Selling price inc. Tax.
                                          </label>
                                          <input
                                            type="text"
                                            id="name"
                                            name="sell_price_inc_tax"
                                            className="form-control form-variation"
                                            placeholder="sell_price_inc_tax"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div className="col-12">
                                        <div className="form-label ">
                                          Product Image
                                        </div>
                                        <input
                                          type="file"
                                          name="images[]"
                                          className="form-control form-variation"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {selectedOption === "Variation" && (
                                <div className="">
                                  <div className="d-flex align-items-center gap-1 mt-4 mb-1">
                                    <h3>Add Variation</h3>
                                    <button
                                      onClick={increaseVariationTemplate}
                                      className="btn btn-sm btn-primary"
                                    >
                                      <FaPlus></FaPlus>
                                    </button>
                                  </div>

                                  {count && (
                                    <>
                                      <div>
                                        {Array.from(
                                          { length: count },
                                          (_, index) => {
                                            const divId = `div-${index + 1}`;
                                            const variationId = `variation-${
                                              index + 1
                                            }`;

                                            return (
                                              <>
                                                <div
                                                  id={divId}
                                                  key={index}
                                                  className="row d-flex align-items-end"
                                                >
                                                  <div className=" col-md-2 col-12">
                                                    <div className="mb-1">
                                                      <label
                                                        className="form-label"
                                                        htmlFor="first-name-column"
                                                      >
                                                        Variation Name
                                                      </label>

                                                      <Select
                                                        className=""
                                                        id={variationId}
                                                        name="variation_id"
                                                        aria-label="Select a division"
                                                        onChange={(event) =>
                                                          variantSelect(
                                                            event,
                                                            variationId
                                                          )
                                                        }
                                                        options={variationData}
                                                        getOptionLabel={(x) =>
                                                          x?.name
                                                        }
                                                        getOptionValue={(x) =>
                                                          x?.id
                                                        }
                                                      ></Select>
                                                      <span className="text-danger">
                                                        {Error?.variant}
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div className="mb-1 col-md-4  mt-1  col-12">
                                                    <label
                                                      className="form-label"
                                                      htmlFor="first-name-column"
                                                    >
                                                      Variation value
                                                    </label>
                                                    <Select
                                                      id={`variation_value_id-${
                                                        index + 1
                                                      }`}
                                                      name="variation_value_id"
                                                      aria-label="Select a division"
                                                      defaultValue={[
                                                        variationValues[2],
                                                        variationValues[3],
                                                      ]}
                                                      isMulti
                                                      className="basic-multi-select"
                                                      classNamePrefix="select"
                                                      options={variationValues}
                                                      getOptionLabel={(x) =>
                                                        x?.value
                                                      }
                                                      getOptionValue={(x) =>
                                                        x?.id
                                                      }
                                                      onChange={(
                                                        selectedValues
                                                      ) =>
                                                        handleVariationChange(
                                                          selectedValues
                                                        )
                                                      }
                                                    ></Select>
                                                    <span className="text-danger">
                                                      {Error?.variantionValue}
                                                    </span>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-1">
                                                    <div className="col-12">
                                                      {valueFields.map(
                                                        (value, index) => (
                                                          <div key={index}>
                                                            <div className="bg text-black row">
                                                              <div className="col-md-1">
                                                                <div className="col-12">
                                                                  <div className="my-1">
                                                                    <label
                                                                      className="form-label"
                                                                      htmlFor={`variation_field_${
                                                                        index +
                                                                        1
                                                                      }`}
                                                                    >
                                                                      Value{" "}
                                                                      {index +
                                                                        1}
                                                                    </label>
                                                                    <input
                                                                      type="text"
                                                                      id={`variation_field_${
                                                                        index +
                                                                        1
                                                                      }`}
                                                                      name={`variation_field_${
                                                                        index +
                                                                        1
                                                                      }`}
                                                                      className="form-control form-variation"
                                                                      placeholder={`variation value ${
                                                                        index +
                                                                        1
                                                                      }`}
                                                                      value={
                                                                        value ||
                                                                        ""
                                                                      }
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>

                                                              <div className="col-md-2">
                                                                <div className="col-12">
                                                                  <div className="my-1">
                                                                    <label
                                                                      className="form-label"
                                                                      htmlFor="first-name-column"
                                                                    >
                                                                      Default
                                                                      Purchace
                                                                      Price Exc.
                                                                      Tax.
                                                                    </label>
                                                                    <input
                                                                      type="text"
                                                                      id="name"
                                                                      name="default_purchase_price"
                                                                      className="form-control form-variation"
                                                                      placeholder="Default Purchase Price"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="col-md-2">
                                                                <div className="col-12">
                                                                  <div className="my-1">
                                                                    <label
                                                                      className="form-label"
                                                                      htmlFor="first-name-column"
                                                                    >
                                                                      Purchase
                                                                      Price inc.
                                                                      Tax.
                                                                    </label>
                                                                    <input
                                                                      type="text"
                                                                      id="name"
                                                                      name="dpp_inc_tax"
                                                                      className="form-control form-variation"
                                                                      placeholder="DPP Inc. Tax"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>

                                                              <div className="col-md-1">
                                                                <div className="col-12">
                                                                  <div className="my-1">
                                                                    <label
                                                                      className="form-label"
                                                                      htmlFor="first-name-column"
                                                                    >
                                                                      Profit(%)
                                                                    </label>
                                                                    <input
                                                                      type="text"
                                                                      id="name"
                                                                      name="profit_percent"
                                                                      placeholder="profit (%)"
                                                                      className="form-control form-variation"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>

                                                              <div className="col-md-1">
                                                                <div className="col-12">
                                                                  <div className="my-1">
                                                                    <label
                                                                      className="form-label"
                                                                      htmlFor="first-name-column"
                                                                    >
                                                                      DSP Exc
                                                                      Tax
                                                                    </label>
                                                                    <input
                                                                      type="text"
                                                                      id="name"
                                                                      name="default_sell_price"
                                                                      className="form-control form-variation"
                                                                      placeholder="DSP Ex Tax"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="col-md-2">
                                                                <div className="col-12">
                                                                  <div className="my-1">
                                                                    <label
                                                                      className="form-label"
                                                                      htmlFor="first-name-column"
                                                                    >
                                                                      Selling
                                                                      Price Inc.
                                                                      tax
                                                                    </label>
                                                                    <input
                                                                      type="text"
                                                                      id="name"
                                                                      name="sell_price_inc_tax"
                                                                      className="form-control form-variation"
                                                                      placeholder="Sell Price Inc. Tax"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="col-md-1">
                                                                <div className="col-12">
                                                                  <div className="my-1">
                                                                    <label
                                                                      className="form-label"
                                                                      htmlFor="first-name-column"
                                                                    >
                                                                      Stock
                                                                      Product
                                                                    </label>
                                                                    <input
                                                                      type="number"
                                                                      id="name"
                                                                      name="stock_amount"
                                                                      className="form-control form-variation"
                                                                      placeholder="Quantity"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>

                                                              <div className="col-md-2 my-1">
                                                                <div className="col-12">
                                                                  <div className="form-label ">
                                                                    Image
                                                                  </div>
                                                                  <input
                                                                    type="file"
                                                                    className="form-control form-variation"
                                                                  />
                                                                </div>
                                                              </div>

                                                              {/* <div className="col-1 mt-2">
                                                        {index === 0 && (
                                                          <button
                                                            type="button"
                                                            className="btn-icon btn-sm btn btn-primary btn-round btn-md px-md-2"
                                                            onClick={() =>
                                                              addVariation()
                                                            }
                                                          >
                                                            <FaPlus />
                                                        
                                                          </button>
                                                        )}
                                                        {index !== 0 && (
                                                          <button
                                                            type="button"
                                                            className="btn-icon btn btn-danger btn-round btn-sm "
                                                            onClick={() =>
                                                              handleRemoveVariation(
                                                                index
                                                              )
                                                            }
                                                          >
                                                            <FaMinus />
                                                          
                                                          </button>
                                                        )}
                                                      </div> */}
                                                            </div>
                                                          </div>
                                                        )
                                                      )}
                                                    </div>
                                                  </div>
                                                  {index !== 0 && (
                                                    <>
                                                      <button
                                                        className="col-1 justify-content-end"
                                                        onClick={() =>
                                                          removeVariationTemplate(
                                                            divId
                                                          )
                                                        }
                                                      >
                                                        Remove
                                                      </button>
                                                    </>
                                                  )}
                                                </div>
                                              </>
                                            );
                                          }
                                        )}
                                      </div>
                                    </>
                                  )}
                                </div>
                              )}
                            </div>

                            <div className="content-header-right text-end col-12 my-3">
                              <div className="mb-1 pb-1 breadcrumb-right">
                                <button
                                  type="submit"
                                  className="btn btn-primary me-1"
                                >
                                  Submit
                                  <ToastContainer />
                                </button>
                                <button
                                  type="reset"
                                  className="btn btn-outline-secondary"
                                >
                                  Reset
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProducttttttt;