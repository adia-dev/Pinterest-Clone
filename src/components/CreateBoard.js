import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function CreateBoard({ setCreateBoardOpen }) {
  const [canSubmit, setCanSubmit] = useState(false);
  const [unavaiableName, setUnavaiableName] = useState(false);
  const [title, setTitle] = useState("");
  const [secret, setSecret] = useState(false);

  const history = useHistory();

  //TODO use props instead of fetching the boards

  const onChangeTitle = (e) => {
    const input = e.target.value;
    setTitle(input);
    setCanSubmit(input.length > 0);

    if (canSubmit) {
      axios
        .get("http://localhost:5000/board/search/" + input)
        .then((res) => {
          setUnavaiableName(res.data !== null);
        })
        .catch((err) => console.log("Error: " + err));
    }
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setCreateBoardOpen(false);
  });

  const onChangeSecret = () => {
    setSecret(!secret);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (canSubmit && !unavaiableName) {
      axios
        .post("http://localhost:5000/board/create", {
          title: title,
          secret: secret,
          thumbnail: "",
          description: "",
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            history.push("/board/" + res.data._id);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="cb-container">
      <div className="cb-container__background"></div>
      <div className="cb-container__body">
        <div className="cb-container__body__header">
          <h2>Créer un tableau</h2>
        </div>
        <form
          method="post"
          className="cb-container__body__form"
          onSubmit={onSubmitForm}
        >
          <label htmlFor="title">Nom :</label>
          <input
            onChange={onChangeTitle}
            className="cb-container__body__form__title"
            type="text"
            name="title"
            placeholder="Ex : « Endroits à visiter » ou « Idées de recettes »"
          />
          {unavaiableName && (
            <p className="cb-container__body__form__warning">
              Ce nom est indisponlible !
            </p>
          )}

          <div className="cb-container__body__form__row">
            <input
              className="cb-container__body__form__secret"
              type="checkbox"
              name="secret"
              onChange={onChangeSecret}
            />
            <div className="cb-container__body__form__row__label">
              <h3>Garder ce tableau secret</h3>
              <p>
                Ainsi, vous et vos collaborateurs êtes les seuls à voir ceci.
              </p>
              <h4>En savoir plus</h4>
            </div>
          </div>
          <input
            className={`cb-container__body__form__submit ${canSubmit &&
              !unavaiableName &&
              "cb-container__body__form__submit--enabled"
              }`}
            type="submit"
            value="Créer"
            name="create"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateBoard;
