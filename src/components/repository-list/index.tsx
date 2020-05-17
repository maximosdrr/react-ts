import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../../store";
import { Props } from "./props.interface";
import * as RepositoriesActions from "../../store/ducks/repositories/actions";

import "./style.css";

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest(this.props.url);
  }

  render() {
    const { repositories } = this.props;
    const { loadRequest, setRepoUrl } = this.props;
    const search = () => loadRequest(this.props.url);
    return (
      <div>
        <ul>
          {repositories.map((repository) => (
            <li key={repository.id}>{repository.owner.html_url}</li>
          ))}
        </ul>
        <p>Url: {this.props.url}</p>
        <input
          placeholder="Type your repo name"
          onChange={(e) => {
            setRepoUrl(e.target.value);
          }}
        ></input>
        <button onClick={search}>maximosdrr</button>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
  url: state.repositories.url,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
