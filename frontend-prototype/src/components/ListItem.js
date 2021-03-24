import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import toast from "./common/toast";

export default class ListItem extends React.Component {
  state = {
    value: this.props.item.promocode,
    copied: false,
    bonusActivated: false,
  };
  updateValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  showToast = () => {
    this.setState({
      copied: true,
    });
    toast.success("Text copied", {});
  };

  activateBonus = () => {
    this.setState({
      bonusActivated: true,
    });
    toast.success("Bonus Activated", {});
  };
  render() {
    const { item } = this.props;
    const { bonusActivated } = this.state;
    return (
      <div class="block-row whiteblk bdr_radius4 bdr_gray p20">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-sm-4">
              <h3 class="title">{item.name}</h3>
              <p class="small-font graytxt mmb10">{item.description}</p>
            </div>
            <div class="col-md-3 col-sm-4">
              <span class="small-font graytxt caps mb5 displayblk">
                Promo-Code
              </span>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="promocode"
                  value={this.state.value}
                  aria-label="Promocode"
                  aria-describedby="promocode"
                  onChange={this.updateValue}
                />

                <CopyToClipboard
                  text={this.state.value}
                  onCopy={this.showToast}
                >
                  <span class="input-group-text" id="promocode">
                    <FontAwesomeIcon
                      icon={faCopy}
                      style={{ color: "#0d6efd" }}
                    />
                  </span>
                </CopyToClipboard>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <span class="small-font graytxt caps mb5 displayblk">&nbsp;</span>
              <button
                class="btn btn-primary w100per"
                onClick={this.activateBonus}
                disabled={bonusActivated}
              >
                {bonusActivated ? "Activated" : "Activate bonus"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
