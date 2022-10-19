import s from './CounterDisplay.module.css'

type CounterDisplay = {
    count: number
}
export let CounterDisplay = (props: CounterDisplay) => {
    return (
        <div className={s.counterDisp}>
            <div className={s.cent}>{props.count}</div>
        </div>
    )
}