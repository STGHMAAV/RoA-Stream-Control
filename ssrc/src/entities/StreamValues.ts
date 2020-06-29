import Player from "./Player";
import Person from "./Person";
import Round from "./Round";

export default interface StreamValue {
    player1: Player; 
    player2: Player; 
    tournament: string; 
    round: Round; 
    caster1: Person; 
    caster2: Person; 
}