// const {count, countfunc} = props

const ChildComp = ({count, countfunc}) => {
    
    return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => countfunc(count + 1)}>
                increase
            </button>
            <button onClick={() => countfunc(count - 1)}>
                decrease
            </button>
            <button onClick={() => countfunc(0)}>
                reset
            </button>


            {/* <h1>{props.count}</h1>

            <button onClick={() => props.countfunc(props.count + 1)}>
                increase
            </button>
            <button onClick={() => props.countfunc(props.count - 1)}>
                decrease
            </button>
            <button onClick={() => props.countfunc(0)}>
                reset
            </button> */}
            
        </div>
    )
}

export default ChildComp