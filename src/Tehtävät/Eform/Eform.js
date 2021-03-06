import React, { useState } from "react";
import "../../App.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Form from "./Form";
//form is imported from its own separate module

const Eform = () => {
  const [submitted, setSubmitted] = useState(false);

  const [newFirstName, setFirstName] = useState("");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const [newLastName, setLastName] = useState("");
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const [newEmail, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [newNumber, setNumber] = useState("");
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const [newWork1, setWork1] = useState("");
  const handleWork1Change = (event) => {
    setWork1(event.target.value);
  };

  const [newWork2, setWork2] = useState("");
  const handleWork2Change = (event) => {
    setWork2(event.target.value);
  };

  const [newDegree, setDegree] = useState("");
  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
  };

  const [newDegreeName, setDegreeName] = useState("");
  const handleDegreeNameChange = (event) => {
    setDegreeName(event.target.value);
  };

  const [newAbout, setAbout] = useState("");
  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const [attached, setAttached] = useState(false);

  //The Register handles the input and the "required: true" is for validation and error purposes.
  //The "CriteriaMode: all" below means that all errors for the field are displayed at once

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const submitForm = (data) => {
    if (data.Attachment.length !== 0) {
      setAttached(true);
    }
    setSubmitted(true);
  };

  //Try again button reloads the page back to its original state
  function refreshPage() {
    window.location.reload();
  }

  //If form is submited succesfully the "success" message below is rendered

  if (submitted) {
    return (
      <div className="mainPageFrame">
        <div className="pageContentFrame">
          <h2 className="infoHeader">
            S??hk??inen hakulomake l??hetetty onnistuneesti.
          </h2>
          <p>Hienoa! N??in kirjoitat ja l??het??t s??hk??isen lomakkeen!</p>
          <br></br>
          {!attached && (
            <>
              <h2 className="infoHeader">...Mutta</h2>
              <p>
                Sinulta unohtui liitetiedosto. Ei h??t????, voit halutessasi
                yritt???? uudelleen, jatkaa seuraavaan teht??v????n tai siirty?? takaisin etusivulle painamalla <strong>Etusivu</strong> -linkki?? sivun vasemmassa laidassa.
              </p>
              <button
                className="actionButton"
                type="button"
                onClick={refreshPage}
              >
                {" "}
                <span>Yrit?? uudelleen</span>{" "}
              </button>
            </>
          )}
        </div>
        <Link to="/Tehtava1" className="nextPracButton" role="button">
          Seuraava teht??v??
        </Link>
      </div>
    );
  }

  return (
    <div className="mainPageFrame">
      <h1 className="pageHeader">S??hk??inen lomake</h1>
      <div className="pageContentFrame">
        <h2 className="infoHeader">Ohje:</h2>
        <p>
          T??ss?? teht??v??ss?? opetellaan s??hk??isen lomakkeen t??ytt??mist?? ja
          l??hett??mist??. S??hk??isi?? lomakkeita on monenlaisia, mutta t??ss??
          harjoitellaan t??ytt??m????n mahdollisesti ty??nhaun yhteydess?? vastaan
          tulevaa lomaketta. Huomaathan, ett?? t??hdell?? merkityt kent??t ovat
          pakollisia.{" "}
          <br /><br />
          <strong>
            Ei huolta, t??ss??k????n teht??v??ss?? ei oikeasti l??hetet?? mit????n
            minnekk????n!
          </strong>
        </p>
      </div>
      <div className="pageContentFrame">
        <h3 className="exerciseHeader">Hakulomake</h3>
        <Form
          newFirstName={newFirstName}
          handleFirstNameChange={handleFirstNameChange}
          newLastName={newLastName}
          handleLastNameChange={handleLastNameChange}
          newEmail={newEmail}
          handleEmailChange={handleEmailChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
          newWork1={newWork1}
          handleWork1Change={handleWork1Change}
          newWork2={newWork2}
          handleWork2Change={handleWork2Change}
          newDegree={newDegree}
          handleDegreeChange={handleDegreeChange}
          newDegreeName={newDegreeName}
          handleDegreeNameChange={handleDegreeNameChange}
          newAbout={newAbout}
          handleAboutChange={handleAboutChange}
          submitForm={handleSubmit(submitForm)}
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default Eform;
