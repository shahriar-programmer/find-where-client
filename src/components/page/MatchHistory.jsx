import globalVariable from "../../utils/globalVariable";

function MatchHistory({ userData }) {
    return (
        <>
            <div className="profile-history w-full grid grid-cols-2 gap-4 mt-8 text-[#A900FD]">
                <div className="history-item">
                    <div className="mb-1 text-lg font-medium text-[#A900FD]">Total Score: </div>
                    <div className="w-full bg-gray-200 rounded-full h-4.5 mb-4">
                        <div className="bg-[#A900FD] text-sm font-medium text-white text-center p-1 leading-none rounded-full" style={{
                            width: `${userData?.totalScore ? (userData?.totalScore / (((Object.keys(userData?.gamePlayed)).length) * (globalVariable?.maxScore + (10 * 100)))) * 100 : 100
                                }%`
                        }}>
                            {userData?.totalScore} / {(Object.keys(userData?.gamePlayed)).length * (globalVariable?.maxScore + (10 * 100))}</div>
                    </div>
                </div>

                <div className="history-item">
                    <div className="mb-1 text-lg font-medium text-[#A900FD]">Average Score: </div>
                    <div className="w-full bg-gray-200 rounded-full h-4.5 mb-4">
                        <div className="bg-[#A900FD] text-sm font-medium text-white text-center p-1 leading-none rounded-full" style={{
                            width: `${userData?.totalScore ? (userData?.totalScore / (((Object.keys(userData?.gamePlayed)).length)) / globalVariable?.maxScore) * 100 : 100
                                }%`
                        }}>
                            {(userData?.totalScore / (((Object.keys(userData?.gamePlayed)).length)))} / {globalVariable?.maxScore}
                        </div>
                    </div>
                </div>
                <div className="history-item">
                    <div className="mb-1 text-lg font-medium text-[#A900FD]">Best Score: </div>
                    <div className="w-full bg-gray-200 rounded-full h-4.5 mb-4">
                        <div className="bg-[#A900FD] text-sm font-medium text-white text-center p-1 leading-none rounded-full" style={{
                            width: `${userData?.highScore ? (userData?.highScore / globalVariable?.maxScore) * 100 : 100
                                }%`
                        }}>
                            {userData?.highScore} / {globalVariable?.maxScore}
                        </div>
                    </div>
                </div>

                <div className="history-item">
                    <div className="mb-1 text-lg font-medium text-[#A900FD]">Match Won: </div>
                    <div className="w-full bg-gray-200 rounded-full h-4.5 mb-4">
                        <div className="bg-[#A900FD] text-sm font-medium text-white text-center p-1 leading-none rounded-full" style={{
                            width: `${userData?.winCount ? (userData?.winCount / userData?.totalMatch) * 100 : 100
                                }%`
                        }}>
                            {userData?.winCount} / {userData?.totalMatch}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MatchHistory;