import { configureStore } from '@reduxjs/toolkit';
import challengesReducer from '../features/challenges/challengesSlice';
import feedReducer from '../features/feed/feedSlice';
import historyReducer from '../features/history/historySlice';
import leaderboardReducer from '../features/leaderboard/leaderboardSlice';
import savedReducer from '../features/saved/savedSlice';
import searchReducer from '../features/search/searchSlice';
import userReducer from '../features/user/userSlice';
import videoReducer from '../features/video/videoSlice';


export default configureStore({
    reducer: {
        challenges: challengesReducer,
        feed: feedReducer,
        history: historyReducer,
        leaderboard: leaderboardReducer,
        saved: savedReducer,
        search: searchReducer,
        user: userReducer,
        video: videoReducer,
    },
});
