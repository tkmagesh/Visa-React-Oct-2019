export function down(delta){
    let action = { type : 'DOWN', payload : delta};
    return action;
}