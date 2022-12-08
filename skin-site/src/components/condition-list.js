import React, {useState, useEffect} from "react";
import SkinDataService from "../services/skinsite";
import {Link} from "react-router-dom";

const ListCondition = props => {
    const [SkinConditions, setConditions] = useState([]);

    useEffect(() => {
        retrieveConditions();
    }, []);

    const retrieveConditions = () => {
        SkinDataService.getAll()
        .then(response => {
            console.log(response.data);
            setConditions(response.data.test);
        }).catch(e => {
            console.log(e);
        });
    }

    const refreshList = () => {
        retrieveConditions();
    };

    return (
        <div>
          <div className="row">
          {SkinConditions.map((SkinCondition) => {
          return (
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{SkinCondition.name}</h5>
                  <p className="card-text">
                    <strong>symptoms: </strong>{SkinCondition.symptoms}<br/>
                  </p>
                  <div className="row">
                  <Link to={"/conditions/"+SkinCondition._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                    View Condition
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
          </div>
        </div>
    );
};

export default ListCondition;