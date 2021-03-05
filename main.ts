// Makes the MiniBit turn 90 degress right.
function right () {
    minibit.rotatems(mbRobotDirection.Right, 37, 350)
}
// Makes the MiniBit turn 90 degress left/
function left () {
    minibit.rotatems(mbRobotDirection.Left, 37, 350)
}
// The main sequence that navigates the MiniBit through your maze.
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        forward()
    }
    left()
    forward()
    for (let index = 0; index < 2; index++) {
        right()
    }
    for (let index = 0; index < 4; index++) {
        forward()
    }
})
// Allows you to stop the mini bit if you need to.
input.onButtonPressed(Button.B, function () {
    minibit.stop(mbStopMode.Brake)
})
function forward () {
    // This ensures that the MiniBit goes in a straight line
    minibit.mbBias(mbRobotDirection.Left, 10)
    minibit.goms(mbDirection.Forward, 60, 1000)
}
