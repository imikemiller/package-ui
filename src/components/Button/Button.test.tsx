import { snapshotTestFactory } from "../../utils/snapshotTestFactory";
import { Button, ButtonProps } from "./Button";

const props: ButtonProps[] = [
  {
    mode: "secondary",
    size: "small",
    label: "test",
  },
  {
    size: "medium",
    label: "test",
  },
  {
    size: "large",
    label: "test",
  },
];
snapshotTestFactory(Button, props);
