import { useEffect } from "react";
import toast from "react-hot-toast";
import { useTimer } from 'react-timer-hook';
import useStore from "../../store";
import globalVariable from "../../utils/globalVariable";

function GameTimer() {
    var time = new Date();
    const state = useStore((state) => state)

    const {
        seconds,
        pause,
        resume,
        start,
        isRunning,
        restart,
    } = useTimer({
        expiryTimestamp: time.setSeconds(time.getSeconds() + (globalVariable?.maxTime)), autoStart: true, onExpire: () => {
            toast.error("Times Up.")
            state.setUpdateQ(true)
        }
    });

    useEffect(() => {
        var time = new Date();
        if (state.updateQ == true) {
            restart(time.setSeconds(time.getSeconds() + (globalVariable?.maxTime)))
        }

        if (state.gamePause == true || state.gameOver == true || state.gameStart == true || state.choiceModal == true) {
            const toShowTime = (globalVariable.maxTime - seconds)
            state.setTime(toShowTime)
            pause()
        } else if (state.gamePause != true & state.gameOver != true & state.gameStart != true & state.choiceModal != true) {
            resume()
            console.log("Now Resume")
        }
    }, [state.updateQ, state.gamePause, state.gameOver, state.gameBonus, state.gameStart, state.choiceModal]);

    return (
        <div onClick={isRunning ? pause : resume} className="kahoot-timer absolute left-4 top-[50%] w-20 h-20 flex items-center justify-center bg-violet-600 rounded-full text-5xl text-white font-bold z-10">{seconds}</div>
    );
}

export default GameTimer;