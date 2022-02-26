import Footer from "./Footer";
import MenuItem from "./MenuItem";
import UserData from "./UserData";
import propTypes from "prop-types";

export default function SideBar({ menuActive }) {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <UserData />
        <div className="menus">
          <MenuItem
            iconPath="ic-menu-overview"
            href="/member"
            title="Overview"
            isActive={menuActive === "overview"}
          />
          <MenuItem
            iconPath="ic-menu-transactions"
            href="/member/transactions"
            title="Transactions"
            isActive={menuActive === "transactions"}
          />
          <MenuItem
            iconPath="ic-menu-messages"
            href="/member/messages"
            title="Messages"
          />
          <MenuItem iconPath="ic-menu-card" href="/card" title="Card" />
          <MenuItem
            iconPath="ic-menu-rewards"
            href="/member/rewards"
            title="Rewards"
          />
          <MenuItem
            iconPath="ic-menu-settings"
            href="/member/edit-profile"
            title="Settings"
            isActive={menuActive === "settings"}
          />
          <MenuItem iconPath="ic-menu-logout" href="/sign-in" title="Log Out" />
        </div>
        <Footer />
      </div>
    </section>
  );
}

SideBar.propTypes = {
  menuActive: propTypes.string,
};
