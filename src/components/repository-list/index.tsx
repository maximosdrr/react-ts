import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../../store";
import { Props } from "./props.interface";
import * as RepositoriesActions from "../../store/ducks/repositories/actions";

import "./style.css";
import { Repository } from "../../store/ducks/repositories/types";
import RepositoryItem from "../repository-item";

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
      <div className="main-content">
        <img
          src="http://pngimg.com/uploads/github/github_PNG20.png"
          width={250}
          height={200}
        ></img>
        <div className="input-content">
          <input
            placeholder="Type your github username"
            onChange={(e) => {
              setRepoUrl(e.target.value);
            }}
          ></input>
          <button onClick={search}>Search</button>
        </div>
        <div>
          {repositories.map((repository: Repository) => (
            <RepositoryItem repository={repository}></RepositoryItem>
          ))}
        </div>
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
