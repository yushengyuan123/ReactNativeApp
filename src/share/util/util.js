import {
    Dimensions,
} from 'react-native';

export function RandomNumBoth(Min,Max){
    let Range = Max - Min;
    let Rand = Math.random();
    return Min + Math.round(Rand * Range);
}

export function getScreenWidthAndHeight() {
    let {width,height} = Dimensions.get("window");
    return {
        width: width,
        height: height
    }
}
