export function up(delta){
    let action = { type : 'UP', payload : delta};
    return action;
}