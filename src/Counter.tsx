import {CounterButtons} from "./CounterButtons";
import s from './Counter.module.css'
import {CounterDisplay} from "./CounterDisplay";
type CounterPropsType={
    increment:()=>void
    count:number
    reset:()=>void
    maxValue:number
}
export let Counter=(props:CounterPropsType)=>{
    return(
        <div className={s.Counter}>
            <CounterDisplay count={props.count}/>
            <CounterButtons increment={props.increment} reset={props.reset} maxValue={props.maxValue} count={props.count}/>
        </div>
    )
}