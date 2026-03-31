import { ReactNode } from "react"

export interface CardsProps {
    label: string,
    value: number,
    icon: ReactNode,
    color: string,
    formatter?: () => string
}