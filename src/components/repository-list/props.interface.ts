import { Repository } from "../../store/ducks/repositories/types";

interface StateProps {
  repositories: Repository[];
  url: string;
}

interface DispatchProps {
  loadRequest(url: any): void;
}

interface OwnProps {}

export type Props = StateProps & DispatchProps & OwnProps;
