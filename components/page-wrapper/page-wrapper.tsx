import React, { FC } from "react"
import { WithChildren } from "../../helpers/types/functional-component.type"
import { NavigationBar } from "../navigation-bar/navigation-bar";
import style from './page-wrapper.module.scss';

const PageWrapper: FC<WithChildren> = ({ children }) => {
    return (
        <div className={style.page_wrapper}>
            <NavigationBar />
            {children}
        </div>)
};


export default PageWrapper;