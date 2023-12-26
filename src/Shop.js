import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "./State/index";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="container my-5">
      <button
        className="btn btn-primary m-3"
        type="button"
        onClick={() => actions.depostMoney(100)
        }
      >
        Add +
      </button>
      add to cart
      <button
        className="btn btn-primary m-3"
        type="button"
        onClick={() => actions.withdrawMoney(100)
        }
      >
        Remove -
      </button>
    </div>
  );
};

export default Shop;
