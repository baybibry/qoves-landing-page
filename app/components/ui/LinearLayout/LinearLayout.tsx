import styles from './LinearLayout.module.scss'
import {ILinearLayoutProps} from "@/app/components/ui/LinearLayout/LinearLayout.types";
import clsx from "clsx";

const LinearLayout = ( { children, className, isHaveVerticalBorder } : ILinearLayoutProps) => {
    return(
        <div
            className={clsx(
                styles.root,
                className && className,
                isHaveVerticalBorder && styles.verticalBorder
            )}
        >
            {children}
        </div>
    )
}

export default LinearLayout