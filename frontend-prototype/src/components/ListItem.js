import React from "react";
import ReactDOM from "react-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class ListItem extends React.Component {
  state = {
    value: this.props.item.promocode,
    copied: false,
  };
  updateValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    const { item } = this.props;
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
                Promocode
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
                  onCopy={() => this.setState({ copied: true })}
                >
                  <span class="input-group-text" id="promocode">
                    <i class="fa fa-copy bluetxt"></i>
                  </span>
                </CopyToClipboard>
                {this.state.copied ? (
                  <span style={{ color: "red" }}>Copied.</span>
                ) : null}
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <span class="small-font graytxt caps mb5 displayblk">&nbsp;</span>
              <button class="btn btn-primary w100per">Activate bonus</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
