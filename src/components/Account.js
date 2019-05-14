import React from 'react'

function Account() {
    return (
        <section className="bg-light mb-5 pb-4 pt-4">
            <fieldset className="border border-dark ml-2 mr-5 pb-5"><legend> Primary Supply</legend>
                <form className="ml-3">
                    {/* Radio input buttons */}
                    <div className="custom-control custom-radio mb-3">
                        <input type="radio" name="foodSupplyType" value="farmProduceRaw" /> Farm Produce (Raw) <br />
                        <input type="radio" name="foodSupplyType" value="supermarketGroceryStore" /> Supermarket / Grocery Store <br />
                        <input type="radio" name="foodSupplyType" value="wholesaleSupplier" /> Wholesale / Bulk Supplier  <br />
                        <input type="radio" name="foodSupplyType" value="restaurantFoodCatering" /> Restaurant / Food Catering  <br />
                    </div>
                    {/* choose locations button */}
                    <div className="custom-file mb-3">
                        <i className="fas fa-plus-circle mr-2 fa-4x"></i>
                        <input type="text" placeholder="location" /><br />
                        <label className="" ></label>
                    </div>
                    {/* Operation Hours */}
                    <div className="form-row mx-auto">
                        <i className="far fa-calendar-alt fa-4x"></i>
                        <div className="col-md-3 mb-3"><br />
                            <input type="text" className="form-control" id="quantity" placeholder="Operation Hours" disabled />

                        </div>
                        <select className="time col-md-3 mb-3">
                            <option value="00:00">12.00 AM</option>
                            <option value="00:30">12.30 AM</option>
                            <option value="01:00">01.00 AM</option>
                            <option value="01:30">01.30 AM</option>
                            <option value="02:00">02.00 AM</option>
                            <option value="02:30">02.30 AM</option>
                            <option value="03:00">03.00 AM</option>
                            <option value="03:30">03.30 AM</option>
                            <option value="04:00">04.00 AM</option>
                            <option value="04:30">04.30 AM</option>
                            <option value="05:00">05.00 AM</option>
                            <option value="05:30">05.30 AM</option>
                            <option value="06:00">06.00 AM</option>
                            <option value="06:30">06.30 AM</option>
                            <option value="07:00">07.00 AM</option>
                            <option value="07:30">07.30 AM</option>
                            <option value="08:00">08.00 AM</option>
                            <option value="08:30">08.30 AM</option>
                            <option value="09:00">09.00 AM</option>
                            <option value="09:30">09.30 AM</option>
                            <option value="10:00">10.00 AM</option>
                            <option value="10:30">10.30 AM</option>
                            <option value="11:00">11.00 AM</option>
                            <option value="11:30">11.30 AM</option>
                            <option value="12:00">12.00 PM</option>
                            <option value="12:30">12.30 PM</option>
                            <option value="13:00">01.00 PM</option>
                            <option value="13:30">01.30 PM</option>
                            <option value="14:00">02.00 PM</option>
                            <option value="14:30">02.30 PM</option>
                            <option value="15:00">03.00 PM</option>
                            <option value="15:30">03.30 PM</option>
                            <option value="16:00">04.00 PM</option>
                            <option value="16:30">04.30 PM</option>
                            <option value="17:00">05.00 PM</option>
                            <option value="17:30">05.30 PM</option>
                            <option value="18:00">06.00 PM</option>
                            <option value="18:30">06.30 PM</option>
                            <option value="19:00">07.00 PM</option>
                            <option value="19:30">07.30 PM</option>
                            <option value="20:00">08.00 PM</option>
                            <option value="20:30">08.30 PM</option>
                            <option value="21:00">09.00 PM</option>
                            <option value="21:30">09.30 PM</option>
                            <option value="22:00">10.00 PM</option>
                            <option value="22:30">10.30 PM</option>
                            <option value="23:00">11.00 PM</option>
                            <option value="23:30">11.30 PM</option>
                        </select>
                        <br />
                        <select className="time col-md-3 mb-3">
                            <option value="00:00">12.00 AM</option>
                            <option value="00:30">12.30 AM</option>
                            <option value="01:00">01.00 AM</option>
                            <option value="01:30">01.30 AM</option>
                            <option value="02:00">02.00 AM</option>
                            <option value="02:30">02.30 AM</option>
                            <option value="03:00">03.00 AM</option>
                            <option value="03:30">03.30 AM</option>
                            <option value="04:00">04.00 AM</option>
                            <option value="04:30">04.30 AM</option>
                            <option value="05:00">05.00 AM</option>
                            <option value="05:30">05.30 AM</option>
                            <option value="06:00">06.00 AM</option>
                            <option value="06:30">06.30 AM</option>
                            <option value="07:00">07.00 AM</option>
                            <option value="07:30">07.30 AM</option>
                            <option value="08:00">08.00 AM</option>
                            <option value="08:30">08.30 AM</option>
                            <option value="09:00">09.00 AM</option>
                            <option value="09:30">09.30 AM</option>
                            <option value="10:00">10.00 AM</option>
                            <option value="10:30">10.30 AM</option>
                            <option value="11:00">11.00 AM</option>
                            <option value="11:30">11.30 AM</option>
                            <option value="12:00">12.00 PM</option>
                            <option value="12:30">12.30 PM</option>
                            <option value="13:00">01.00 PM</option>
                            <option value="13:30">01.30 PM</option>
                            <option value="14:00">02.00 PM</option>
                            <option value="14:30">02.30 PM</option>
                            <option value="15:00">03.00 PM</option>
                            <option value="15:30">03.30 PM</option>
                            <option value="16:00">04.00 PM</option>
                            <option value="16:30">04.30 PM</option>
                            <option value="17:00">05.00 PM</option>
                            <option value="17:30">05.30 PM</option>
                            <option value="18:00">06.00 PM</option>
                            <option value="18:30">06.30 PM</option>
                            <option value="19:00">07.00 PM</option>
                            <option value="19:30">07.30 PM</option>
                            <option value="20:00">08.00 PM</option>
                            <option value="20:30">08.30 PM</option>
                            <option value="21:00">09.00 PM</option>
                            <option value="21:30">09.30 PM</option>
                            <option value="22:00">10.00 PM</option>
                            <option value="22:30">10.30 PM</option>
                            <option value="23:00">11.00 PM</option>
                            <option value="23:30">11.30 PM</option>
                        </select>


                    </div>
                    {/* Phone Number */}

                    <div className="form-row mx-auto mb-3">
                        <i className="fas fa-phone-square fa-4x"></i>

                        <div className="col-md-2 mb-3">
                            <input type="text" className="form-control" id="phoneNumberLabel" placeholder="Phone Number" disabled />

                        </div>

                        <div className="col-md-2 mb-">
                            <input type="tel" className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phoneNumber" placeholder="123-456-7890" required />
                            <small className="small">Format: 123-456-7890</small>
                        </div>
                    </div>
                    {/* Business Verification */}
                    <div className="form-row mx-auto">
                        <div className="col-md-1 mb-3">
                            <input type="checkbox" className="form-control" id="price" placeholder="0" required />

                        </div>
                        <div className="col-md-4 mb-3">
                            <input type="text" className="form-control" id="priceText" placeholder=" Allow us to verify your business ? " disabled />

                        </div>

                        <i className="fas fa-question-circle fa-2x"></i>
                    </div>


                    {/* Additional Details */}
                    <div className="form-row mx-auto">
                        <div className="col-md-2 mb-3">
                            <textarea type="text" className="form-control" id="addInfo" placeholder="additional info" cols="1000" rows="10" />
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" className="" id="TAC" placeholder="0" required />

                        <a href="index.html" className="mb-2">Accept Terms & Conditions</a>

                    </div>
                    <button className="btn btn-success ml-2 mb-5">Submit</button>
                </form>
            </fieldset>
        </section>
    )
}

export default Account;
