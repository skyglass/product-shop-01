import React from "react";
import styles from "./index.module.css";

interface PropsInterface {
    disabled?: boolean;
    children?: React.ReactNode;
    variant?: "blue" | "outline";
    clickHandler?: () => any;
}

const Button = (props: PropsInterface): JSX.Element => {
    const { children, variant, disabled, clickHandler } = props;
    const renderContent = (children: React.ReactNode) => {
        if (disabled) {
            return <span className={styles.span}>{children}</span>;
        } else {
            return (
                <span className={styles.span} onClick={clickHandler}>
                    {children}
                </span>
            );
        }
    };

    return (
        <div
            className={[
                styles.root,
                disabled ? styles.disabled : "",
                styles[variant || "default"],
            ].join(" ")}
        >
            {renderContent(children)}
        </div>
    );
};

export default Button;
