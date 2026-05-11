function solution(genres, plays) {
    var map = new Map();
    for(let i=0; i<genres.length; i++){
        if(!map.has(genres[i])) map.set(genres[i], []);
        map.get(genres[i]).push({
            play: plays[i],
            index: i
        });
    }
    const sorted = [...map].sort((a,b) => {
        const sum1 = a[1].reduce((acc, cur) => acc + cur.play, 0);
const sum2 = b[1].reduce((acc, cur) => acc + cur.play, 0);
        
        return sum2 - sum1;
    })
     const answer = [];
    for(const [genre, songs] of sorted) {

        songs.sort((a, b) => {
            if(b.play === a.play) {
                return a.index - b.index;
            }

            return b.play - a.play;
        });
        
        const top = songs.slice(0, 2);

        for(const song of top) {
            answer.push(song.index);
        }
    }
    return answer;
}