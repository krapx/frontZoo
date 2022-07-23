interface TitleBadgeProps {
    title: string
    predicate: boolean
    badgeMessage: string
}

const TitleBadge = (props: TitleBadgeProps) => {
    const {predicate, title, badgeMessage} = props
    return (
        <h2>
            {title}
            <span className="game__badge" hidden={predicate}>
                ({badgeMessage})
            </span>
        </h2>
    )
}

export default TitleBadge