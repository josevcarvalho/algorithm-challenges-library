let i = 0;
function hanoi_towers(pieces, source, auxiliary, destination) {
    if (pieces === 1) {
        i++;
        console.log(i, `Move piece from tower ${source} to tower ${destination}`);
        return;
    }
    hanoi_towers(pieces - 1, source, destination, auxiliary);
    i++;
    console.log(i, `Move piece from tower ${source} to tower ${destination}`);
    hanoi_towers(pieces - 1, auxiliary, source, destination);
}
hanoi_towers(5, 'A', 'B', 'C');
