import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    pinCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const pinCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPinCode = pinCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPinCodeIsValid = isSixChars(enteredPinCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      pinCode: enteredPinCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredPinCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit Cart data
    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      pinCode: enteredPinCode,
      city: enteredCity
    });
  };

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`
  const addressControlClasses = `${classes.control} ${formInputsValidity.address ? '' : classes.invalid}`
  const pinCodeControlClasses = `${classes.control} ${formInputsValidity.pinCode ? '' : classes.invalid}`
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Your Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <p>Please enter a valid address!</p>}
      </div>
      <div className={pinCodeControlClasses}>
        <label htmlFor="pin-code">Your Pin-Code</label>
        <input type="text" id="pin-code" ref={pinCodeInputRef} />
        {!formInputsValidity.pinCode && <p>Please enter a valid pin-code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">Your City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
