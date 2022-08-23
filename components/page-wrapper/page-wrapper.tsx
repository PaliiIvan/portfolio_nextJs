import React, { FC } from "react"
import { WithChildren } from "../../helpers/types/functional-component.type"
import style from './page-wrapper.module.scss';

export const PageWrapper: FC<WithChildren> = ({ children }) => {
    return (
        <div className={style.page_wrapper}>
            {children}
            And!
        </div>)
}