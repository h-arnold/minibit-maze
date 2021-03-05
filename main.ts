function right () {
    minibit.rotatems(mbRobotDirection.Right, 37, 350)
}
function left () {
    minibit.rotatems(mbRobotDirection.Left, 37, 350)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        forward()
    }
    left()
    forward()
})
input.onButtonPressed(Button.B, function () {
    minibit.stop(mbStopMode.Brake)
})
function forward () {
    minibit.mbBias(mbRobotDirection.Left, 10)
    minibit.goms(mbDirection.Forward, 60, 1000)
}
