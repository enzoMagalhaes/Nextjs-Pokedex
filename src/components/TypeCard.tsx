import TypeCardProps from "@/interfaces/TypeCardProps"
import styles from "@/styles/TypeCard.module.css"

export default function TypeCard({ type }: TypeCardProps) {
    return (
        <div className={`${styles.type_card} ${styles[type]}`}>
            {type.toUpperCase()}
        </div>
    )
}