import { Repository } from "../../store/ducks/repositories/types";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

interface OwnProps {}

export type Props = StateProps & DispatchProps & OwnProps;
