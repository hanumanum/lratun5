import "./TimeLine.css"

export type TimeLineProps = {
    total: number,
    current: number,
    width: number | string
}

export const TimeLine = (props: TimeLineProps) => {
    const { total, current, width } = props

    const formatSeconds = (seconds: number) => {
        return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)}`
    }

    const currentFormatted = formatSeconds(current)
    const totalFormatted = formatSeconds(total)
    const currentPercent = Math.floor((current / total) * 100) || 0

    return (
        <div className="timeline-holder">
            <div className='timeline-current'>{currentFormatted}</div>
            <div style={{width:width}} className='timeline-progress-bar'>
                <div style={{ width: `${currentPercent}%` }}></div>
            </div>
            <div className='timeline-total'>{totalFormatted}</div>
        </div>
    )
}
