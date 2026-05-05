function solution(participant, completion) {
    let map = new Map();
    for(const name of participant){
        map.set(name, (map.get(name) || 0) + 1);
    }
    for(const name of completion){
        map.set(name, (map.get(name) || 0) - 1);
    }
    for (const [key, value] of map) {
        if (value === 1) return key;
    }  
}
/* sort로도 풀이가 가능!
participant.sort();
completion.sort();

for(let i in participant) {
    if(participant[i] !== completion[i]) return participant[i];
    }
*/