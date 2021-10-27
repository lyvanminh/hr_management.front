
export default class ArrayUtils {
    static add_unique(arr1, arr2, fid) {
        var map = new Map();
        for (let x of arr1) {
            if (map.has(fid(x))) continue;
            map.set(fid(x), 1);
        }

        for (let x of arr2) {
            if (map.has(fid(x))) continue;
            arr1.push(x);
        }

        return arr1;
    }
}