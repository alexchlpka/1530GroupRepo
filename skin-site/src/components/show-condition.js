import React, { useState, useEffect } from "react";
import SkinDataService from "../services/skinsite";
import { Link } from "react-router-dom";

const Condition = props => {
  const initialConditionState = {
    _id: null,
    name: "",
    symptoms: "",
    treatment: "",
  };
  const [SkinCondition, setCondition] = useState(initialConditionState);

  const getCondition = _id => {
    SkinDataService.get(_id)
      .then(response => {
        setCondition(response.data.condition);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log(props.match.params._id)
    getCondition(props.match.params._id);
  }, [props.match.params._id]);

  return (
    <div>
      {SkinCondition ? (
        <div>
          <h5>{SkinCondition.name}</h5>
          <p>
            <strong>symptoms: </strong>{SkinCondition.symptoms}<br/>
          </p>
          <Link to={"/conditions"} className="btn btn-primary">
            Back to listing conditions
          </Link>
        </div>
      ) : (
        <div>
          <br />
          <p>No condition selected.</p>
        </div>
      )}
    </div>
  );
};

export default Condition;