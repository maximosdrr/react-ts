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
    loadRequest("users/diego3g/repos");
  }

  render() {
    const { repositories } = this.props;
    return (
      <div>
        <ul>
          {repositories.map((repository) => (
            <li key={repository.id}>{repository.owner.html_url}</li>
          ))}
        </ul>
        <p>Url: {this.props.url}</p>
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
