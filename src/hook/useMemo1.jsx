import React, { useState, useMemo, useEffect, useCallback } from 'react'

// http://ourjs.com/wiki/view/react-hooks/useMemo
export default function ExampleMemo() {
    let [ip, setIP] = useState(0)
    let [pv, setPV] = useState(0)

    let memoMsg = 'useMemory here'
    let effectMsg = 'useEffect here'

    useEffect(() => {
        effectMsg = 'useEffect here:' + Date.now();
    })

    useMemo(() => {
        memoMsg = 'useMemo here:' + Date.now()
    })

    let memoIp = useMemo(() => {
        return 'useMemo ip here:' + Date.now()
    }, [ip])

    return (
        <div>
            <hr /><h1>useMemoEffect: IP:{ip}, PV:{pv}</h1>
            <p>{effectMsg} ??</p>
            <p>{memoMsg}</p>
            <p>{memoIp}</p>
            <button onClick={() => { setIP(ip + 1); setPV(pv + 1) }}>Add IP</button>
            <button onClick={() => { setPV(pv + 1) }}>Add PV</button>
        </div>
    )
}