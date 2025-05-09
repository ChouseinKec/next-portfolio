import React, { ReactElement, useMemo } from 'react';
import styles from './tabs.module.css';

interface Tab {
    title: string;
    children: ReactElement;
    defaultChecked?: boolean;
}

const Tab: React.FC<Tab> = ({ title, children, defaultChecked }) => {
    return (
        <div className={styles.tab}>
            {/* Radio input to control tab selection */}
            <input id={title} type='radio' name='group' defaultChecked={defaultChecked} />
            {children}
        </div>
    );
};

interface Tabs {
    children: React.ReactNode;
}
const Tabs: React.FC<Tabs> = ({ children }) => {
    // Extract tab titles from children
    const labels = useMemo(() => {
        return React.Children.toArray(children)
            .map((child) => (React.isValidElement<Tab>(child) ? child.props.title : null))
            .filter(Boolean) as string[];
    }, [children]);

    // Generate dynamic CSS to style the selected tab label
    const style = useMemo(() => {
        return labels.reduce((acc, cur) => {
            return acc + `
            &:has(input[id=${cur}]:checked) label[for=${cur}] {
                border-bottom: 1px solid #fff;
            }
            `;
        }, '');
    }, [labels]);

    return (
        <div className={styles.tabs}>
            {/* Inject dynamic styles for selected tab */}
            <style>{style}</style>

            {/* Render tab labels */}
            <div className={styles.header}>
                {labels.map((x, i) => (
                    <label key={`${x} ${i}`} htmlFor={x}>
                        {x}
                    </label>
                ))}
            </div>

            {/* Render tab content */}
            {children}
        </div>
    );
};

export { Tabs, Tab };