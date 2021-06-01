/**
 * Store
 * Lizeth Margarita Garcia Arteaga
 * Mayo 2021
 */
import { createStore, 
         combineReducers, 
         applyMiddleware 
} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, 
         persistReducer 
} from 'redux-persist';
import pokemonesReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['pokemones']
};

const rootReducer = combineReducers({
  pokemonesReducer: persistReducer(persistConfig, pokemonesReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
