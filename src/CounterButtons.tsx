import s from './CounterButtons.module.css'

type ButtonsPropsType = {
    increment: () => void
    reset: () => void
    maxValue: number
    count: number
}

export let CounterButtons = (props: ButtonsPropsType) => {

    const disabledReset = props.count === 0
    const disabledInc = props.count === props.maxValue

    return (
        <div className={s.CounterButtons}>
            <button disabled={disabledInc} onClick={props.increment} className={s.incButton}>inc</button>
            <button disabled={disabledReset} onClick={props.reset} className={s.resetButton}>reset</button>
        </div>
    )
}