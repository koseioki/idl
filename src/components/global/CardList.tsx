
import { Children, type ReactNode } from "react";

type CardListProps = {
    children: ReactNode;
};

export function CardList({ children }: CardListProps) {
    return (
        <ul className="card-list">
            {Children.map(children, (child, index) => (
                <li key={index}>{child}</li>
            ))}
        </ul>
    );
}