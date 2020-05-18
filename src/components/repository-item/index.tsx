import React from "react";
import { Repository } from "../../store/ducks/repositories/types";
import { RepositoryItemProps } from "./props.interface";
import "./style.css";

const RepositoryItem = (props: RepositoryItemProps) => {
  const redirect = (url: string) => window.location.replace(url);

  const executeRedirect = () => redirect(props.repository.html_url);
  return (
    <div
      className="repository-item-main-content"
      key={props.repository.id}
      onClick={executeRedirect}
    >
      <div className="user-profile">
        <img
          width={50}
          height={50}
          src={props.repository.owner.avatar_url}
        ></img>
        <div>
          <p>
            {props.repository.owner.login.length > 9
              ? `${props.repository.owner.login.substr(0, 5)}..`
              : props.repository.owner.login}
          </p>
        </div>
      </div>
      <div className="repository-data">
        <div id="repository-title">
          <p>{props.repository.name}</p>
        </div>
        <div id="repository-description">
          <p>
            {!props.repository.description
              ? "Descrição: Esse projeto não possui descrição"
              : props.repository.description.length > 200
              ? `Descrição: ${props.repository.description.substr(0, 200)}...`
              : `Descrição: ${props.repository.description}`}
          </p>
        </div>
        <div id="repository-language">
          <p>
            {!props.repository.language
              ? "Linguagem: Nenhuma linguagem nesse projeto"
              : `Linguagem: ${props.repository.language}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
