import { sum } from "../welcome";

function Hello() {
  return <div>This is Hello Component {sum(1, 4)}</div>;
}

export { Hello };
