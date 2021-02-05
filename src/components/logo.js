/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "components/link";
import LogoSvg from "components/icons/logo";

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      Dami Hami
    </Link>
  );
}
const styles = {
  logo: {
    color: "#CCCC00",
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    svg: {
      height: "auto",
      width: [128, null, "100%"],
    },
  },
};
