import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="https://www.google.com">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com">
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
