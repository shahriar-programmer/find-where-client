
function CircularProgress() {
    var circumference = 30 * 2 * Math.PI;
    const offset = circumference - 75 / 100 * circumference;

    // useEffect(() => {
    //     const offset = circumference - percent / 100 * circumference;
    //     circle.style.strokeDashoffset = offset;
    // }, []);

    return (
        <svg
            class="progress-ring"
            width="120"
            height="120">
            <circle
                class="progress-ring__circle"
                style={{ transition: "0.35s stroke-dashoffset", transform: "rotate(-90deg)", transformOrigin: "50% 50%", strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: circumference }}
                stroke="white"
                strokeWidth="4"
                fill="transparent"
                r="52"
                cx="60"
                cy="60" />
        </svg>
        // <div class="inline-flex items-center justify-center overflow-hidden rounded-full">
        //     <svg class="w-20 h-20 transform -rotate-90">
        //         <circle
        //             class="text-gray-300"
        //             strokWidth="5"
        //             stroke="currentColor"
        //             fill="transparent"
        //             r="30"
        //             cx="40"
        //             cy="40"
        //         />
        //         <circle
        //             class="text-white"
        //             strokeWidth="5"
        //             strokeLinecap="round"
        //             stroke="currentColor"
        //             strokeDasharray={`${circumference} ${circumference}`}
        //             strokeDashoffset={circumference}
        //             // strokeDashoffset={offset}
        //             fill="transparent"
        //             r="30"
        //             cx="40"
        //             cy="40"
        //         />
        //     </svg>
        //     <span class="absolute text-xl text-white">20%</span>
        // </div>
    );
}

export default CircularProgress;