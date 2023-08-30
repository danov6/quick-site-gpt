import React from 'react'

export function Finished({ answers, startOver, submitSettings }) {
    return (
        <>
            <h3>Here were your selections. Please confirm before submitting:</h3>
            <table>
                <tbody>
                    {answers.map((a, key) => {
                        return (<tr key={key}><td className="que">{a[0]}</td><td className="ans">{a[1]}</td></tr>);
                    })}
                </tbody>
            </table>
            <button onClick={submitSettings} className="generate">Generate HTML Source Code</button>
            <button onClick={startOver} className="startover">Start Over</button>
        </>
    )
}
