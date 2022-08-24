import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { PAGES } from "../../helpers/constants/enums";
import style from "../navigation-bar/navigation-bar.module.scss";
import { NavItem } from "../navigation-item/navigation-item";

export const NavigationBar = () => {
  const router = useRouter();
  const [, currentPage] = router.pathname.split("/");

  const gotTo = useCallback(
    (page: PAGES) => () => {
      router.push(page);
    },
    [router]
  );

  return (
    <div className={style.navigation_bar}>
      <div className={style.initials}>IP</div>
      <div className={style.nav_items_container}>
        <NavItem onClick={gotTo(PAGES.ABOUT)} isActive={PAGES.ABOUT === currentPage}>
          About
        </NavItem>
        <NavItem onClick={gotTo(PAGES.SKILLS)} isActive={PAGES.SKILLS === currentPage}>
          Skills
        </NavItem>
        <NavItem onClick={gotTo(PAGES.EXPERIENCE)} isActive={PAGES.EXPERIENCE === currentPage}>
          Experience
        </NavItem>
      </div>
    </div>
  );
};
