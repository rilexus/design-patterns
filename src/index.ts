import {nativeProxy} from "./patterns/structural";
import {ObserverMain} from "./patterns/behavioral/observer/Subject";

const observerMain = new ObserverMain()
observerMain.setStateAndNotify(2)
observerMain.setStateAndNotify('some')
