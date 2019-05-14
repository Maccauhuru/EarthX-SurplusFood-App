import React from 'react'

function AddSurplus() {
    return (
        <section className="bg-light mb-5 pb-4 pt-4">
            <fieldset className="border border-dark ml-2 mr-5 pb-5"><legend> Add Surplus Details </legend>
                <form className="ml-3">
                    {/* Radio input buttons */}
                    <div className="custom-control custom-radio mb-3">
                        <input type="radio" name="foodType" value="RawProduce" /> Raw Produce <br />
                        <input type="radio" name="foodType" value="PackagedCanned" /> Packaged / Canned <br />
                        <input type="radio" name="foodType" value="PreparedCooked" /> Prepared (Cooked) <br />
                    </div>
                    {/* Custom file upload button */}
                    <div className="custom-file mb-3">
                        <input type="file" className="custom-file-input col-md-1" id="validatedCustomFile" required />
                        <label className="custom-file-label" htmlFor="validatedCustomFile">Choose image / capture</label>x
                </div>
                    {/* Quantity of food */}
                    <div className="form-row mx-auto">
                        <div className="col-md-1 mb-3">
                            <input type="text" className="form-control" id="quantity" placeholder="Quantity" disabled />

                        </div>
                        <div className="col-md-1 mb-">
                            <input type="number" className="form-control" id="quantity" placeholder="0" required />


                        </div>
                        <select className="custom-select col-md-3 mb-3">
                            <option defaultValue>lbs (pounds)</option>
                            <option value="1">g (grams)</option>
                            <option value="2">fl oz(fluid ounces)</option>
                            <option value="3">gal (gallons)</option>
                            <option value="3">ml (milliliters)</option>
                            <option value="3">T (tonnes)</option>
                        </select>


                    </div>
                    {/* Expiration Date */}
                    <div className="form-row mx-auto">
                        <div className="col-md-2 mb-3">
                            <input type="text" className="form-control" id="expiration" placeholder="Expiration Date (Est)" disabled />

                        </div>
                        <div className="col-md-2 mb-">
                            <input type="date" className="form-control" id="datepicker" placeholder="0" required />

                        </div>
                    </div>
                    {/* Selling Price */}
                    <div className="form-row mx-auto">
                        <div className="col-md-1 mb-3">
                            <input type="text" className="form-control" id="priceText" placeholder="Price ($)" disabled />

                        </div>
                        <div className="col-md-1 mb-">
                            <input type="number" className="form-control" id="price" placeholder="0" required />

                        </div>
                    </div>
                    {/* Miles Away */}
                    <div className="form-row mx-auto">
                        <div className="col-md-2 mb-3">
                            <input type="text" className="form-control" id="milesText" placeholder="Accept (miles away)" disabled />

                        </div>
                        <div className="col-md-1 mb-">
                            <input type="number" className="form-control" id="miles" placeholder="0" required />

                        </div>
                    </div>
                    {/* Additional Details */}
                    <div className="form-row mx-auto">
                        <div className="col-md-2 mb-3">
                            <textarea type="text" className="form-control" id="milesText" placeholder="additional info" cols="100" rows="10" />
                        </div>
                    </div>
                    <button className="btn btn-success ml-2 mb-5">Add Surplus Item</button>
                </form>
            </fieldset>
        </section>
    )
}

export default AddSurplus;
