import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        FundIt
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          Campaigns
        </Link>

        <Link route="/campaigns/new">
          +
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
