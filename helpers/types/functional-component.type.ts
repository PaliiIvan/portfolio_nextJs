import { ReactElement } from "react";

export type FC<T = {}> = {
    (props: T & { className?: string, children?: React.ReactNode }, context?: any): ReactElement<any, any> | null;
};

